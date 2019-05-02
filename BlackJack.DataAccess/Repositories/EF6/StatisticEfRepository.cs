﻿using BlackJackDataAccess.Repositories.Interface;
using BlackJackEntities.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJackDataAccess.Repositories.EF6
{
	public class StatisticEfRepository : MainGameEfRepository<Statistic>, IStatisticRepository
	{
		public StatisticEfRepository(ApplicationContext context) : base(context)
		{

		}

		public Task<int> CountElements()
		{
			throw new System.NotImplementedException();
		}

		public Task<List<Statistic>> GetAllGames(int from, int size)
		{
			throw new System.NotImplementedException();
		}

		public Task<List<Statistic>> GetUserGames(int from, int size, string userName)
		{
			throw new System.NotImplementedException();
		}

		public Task<int> UserCount(string userName)
		{
			throw new System.NotImplementedException();
		}
	}
}
