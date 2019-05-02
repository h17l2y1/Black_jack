using BlackJackServices.Exceptions;
using BlackJackServices.Services.Interfaces;
using BlackJackViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BlackJack.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _service;

        public AccountController(IAccountService service)
        {
            _service = service;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var player = await _service.GetById(id);
            return Ok(player);
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _service.GetUsers();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> LogIn([FromBody] RequestSignUpAccountView model)
        {
            if (ModelState.IsValid)
            {
                var token = await _service.Logining(model.UserName);
                return Ok(token);
            }
            throw new ModelNotValidException("RequestSignUpAccountView");
        }

        [HttpPost]
        public async Task<IActionResult> SignUp([FromBody] RequestSignUpAccountView model)
        {
            if (ModelState.IsValid)
            {
                var player = await _service.SignUp(model.UserName);
                return Ok(player);
            }
            throw new ModelNotValidException("RequestSignUpAccountView");
        }
    }
}
