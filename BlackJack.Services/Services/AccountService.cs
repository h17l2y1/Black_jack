﻿using BlackJack.Exceptions;
using BlackJackDataAccess.Repositories.Interface;
using BlackJackEntities.Entities;
using BlackJackEntities.Enums;
using BlackJackServices.Services.Interfaces;
using BlackJackViewModels;
using BlackJackViewModels.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BlackJackServices.Services
{
	public class AccountService : IAccountService
	{
		private readonly UserManager<Player> _userManager;
		private readonly SignInManager<Player> _signInManager;
		private readonly AuthOptions _authOptions;
		private readonly IPlayerRepository _playerRepository;
		private readonly IMappingService _mappingService;

		public AccountService(IOptions<AuthOptions> authOptions,
							  IPlayerRepository playerRepository,
							  UserManager<Player> userManager,
							  SignInManager<Player> signInManager,
							  IMappingService mappingService)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_authOptions = authOptions.Value;
			_playerRepository = playerRepository;
			_mappingService = mappingService;
		}

		public async Task<GetUsersAccountView> GetUsers()
		{
			var users = await _playerRepository.GetByRole(PlayersType.User.ToString());

			var userNames = users
			.Select(x => x.UserName)
			.ToList();
			var response = new GetUsersAccountView(userNames);

			return response;
		}

		public async Task<SignUpAccountResponseView> SignUp(string userName)
		{
			Player user = new Player
			{
				UserName = userName,
				Points = 100,
				Role = PlayersType.User.ToString()
			};
			await _userManager.CreateAsync(user);

			var response = _mappingService.AccountMapper(user, new SignUpAccountResponseView());
			return response;
		}

		public async Task<GetAccountResponseView> GetById(string id)
		{
			var user = await _userManager.FindByIdAsync(id);
			if (user == null)
			{
				throw new NotFoundException();
			}
			var response = _mappingService.AccountMapper(user, new GetAccountResponseView());
			return response;
		}

		public async Task<TokenAccountView> LogIn(string userName)
		{
			Player user = _userManager.Users.FirstOrDefault(x => x.UserName == userName);
			if (user == null)
			{
				await SignUp(userName);
				user = _userManager.Users.FirstOrDefault(x => x.UserName == userName);
			}
			var identity = GetIdentity(user);
			var token = new TokenAccountView
			{
				Token = GetTokenString(identity)
			};
			return token;
		}

		private string GetTokenString(ClaimsIdentity identity)
		{
			var jwt = GetToken(identity);
			var stringToken = new JwtSecurityTokenHandler().WriteToken(jwt);
			return stringToken;
		}

		private JwtSecurityToken GetToken(ClaimsIdentity identity)
		{
			var key = Encoding.ASCII.GetBytes(_authOptions.Key);
			var jwt = new JwtSecurityToken(
				issuer: _authOptions.Issuer,
				audience: _authOptions.Audience,
				claims: identity.Claims,
				expires: DateTime.UtcNow.AddDays(_authOptions.LifeTime),
				signingCredentials: new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
				);
			return jwt;
		}

		private ClaimsIdentity GetIdentity(Player user)
		{
			var claimsList = new List<Claim>
				{
					new Claim("UserName", user.UserName),
					new Claim("UserId",user.Id),
					new Claim("Role", user.Role)
				};
			ClaimsIdentity claimsIdentity = new ClaimsIdentity(claimsList, "Token");
			return claimsIdentity;
		}

	}
}
