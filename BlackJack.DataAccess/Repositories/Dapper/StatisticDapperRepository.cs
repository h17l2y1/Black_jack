﻿using BlackJackDataAccess.Domain;
using BlackJackDataAccess.Repositories.Interface;
using BlackJackEntities.Entities;
using Dapper;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJackDataAccess.Repositories.Dapper
{
	public class StatisticDapperRepository : MainGameDapperRepository<Statistic>, IStatisticRepository
	{
		public StatisticDapperRepository(IOptions<ConnectionStrings> connectionConfig) : base(connectionConfig)
		{
		}

		public async Task<List<Statistic>> GetAllGames(int from, int size)
		{
			var sql = $@"
                    SELECT 
		                AspNetUsers.UserName,
		                GameUsers.Winner, 
		                Sum(Value) as Score,
		                CardMoves.GameId
                    FROM 
		                Games
                    Inner JOIN 
		                (Select * From GameUsers ) 
		                as GameUsers ON Games.Id = GameUsers.GameId 
                    Inner JOIN 
		                CardMoves ON Games.Id = CardMoves.GameId And 
		                PlayerId = GameUsers.UserId
                    Inner JOIN 
		                AspNetUsers ON AspNetUsers.Id = UserId
                    WHERE  		
		                CardMoves.Role = 'User'
                    group by
		                CardMoves.GameId, AspNetUsers.UserName, GameUsers.Winner
                    Order By 
                        CardMoves.GameId 
                    OFFSET 
                        {from} Row 
                    FETCH NEXT {size} ROWS ONLY";

			using (IDbConnection connection = new SqlConnection(_connectionString))
			{
				var games = (await connection.QueryAsync<Statistic>(sql)).ToList();
				return games;
			}
		}

		public async Task<int> CountElements()
		{
			var sql = $@"
                    SELECT COUNT(*) AS total FROM 
                    (
                    SELECT 
		                AspNetUsers.UserName,
		                GameUsers.Winner, 
		                Sum(Value) as Score,
		                CardMoves.GameId
                    FROM 
		                Games
                    Inner JOIN 
		                (Select * From GameUsers ) 
		                as GameUsers ON Games.Id = GameUsers.GameId 
                    Inner JOIN 
		                CardMoves ON Games.Id = CardMoves.GameId And 
		                PlayerId = GameUsers.UserId
                    Inner JOIN 
		                AspNetUsers ON AspNetUsers.Id = UserId
                    WHERE  		
		                CardMoves.Role = 'User'
                    group by
		                CardMoves.GameId, AspNetUsers.UserName, GameUsers.Winner
		                ) AS total;";
			using (IDbConnection connection = new SqlConnection(_connectionString))
			{
				var dbCount = (await connection.QuerySingleAsync<int>(sql));
				return dbCount;
			}
		}

		public async Task<List<Statistic>> GetUserGames(int from, int size, string userName)
		{
			var sql = $@"
                    SELECT 
		                AspNetUsers.UserName,
		                GameUsers.Winner, 
		                Sum(Value) as Score,
		                CardMoves.GameId
                    FROM 
		                Games
                    Inner JOIN 
		                (Select * From GameUsers ) 
		                as GameUsers ON Games.Id = GameUsers.GameId 
                    Inner JOIN 
		                CardMoves ON Games.Id = CardMoves.GameId And 
		                PlayerId = GameUsers.UserId
                    Inner JOIN 
		                AspNetUsers ON AspNetUsers.Id = UserId
                    WHERE  		
		                CardMoves.Role = 'User' and AspNetUsers.UserName = '{userName}'
                    group by
		                CardMoves.GameId, AspNetUsers.UserName, GameUsers.Winner
                    Order By 
                        CardMoves.GameId 
                    OFFSET 
                        {from} Row 
                    FETCH NEXT {size} ROWS ONLY";

			using (IDbConnection connection = new SqlConnection(_connectionString))
			{
				var games = (await connection.QueryAsync<Statistic>(sql)).ToList();
				return games;
			}
		}

		public async Task<int> UserCount(string userName)
		{
			var sql = $@"
                    SELECT COUNT(*) AS total FROM 
                    (
                    SELECT 
		                AspNetUsers.UserName,
		                GameUsers.Winner, 
		                Sum(Value) as Score,
		                CardMoves.GameId
                    FROM 
		                Games
                    Inner JOIN 
		                (Select * From GameUsers ) 
		                as GameUsers ON Games.Id = GameUsers.GameId 
                    Inner JOIN 
		                CardMoves ON Games.Id = CardMoves.GameId And 
		                PlayerId = GameUsers.UserId
                    Inner JOIN 
		                AspNetUsers ON AspNetUsers.Id = UserId
                    WHERE  		
		                CardMoves.Role = 'User' and AspNetUsers.UserName = '{userName}'
                    group by
		                CardMoves.GameId, AspNetUsers.UserName, GameUsers.Winner
		                ) AS total;";
			using (IDbConnection connection = new SqlConnection(_connectionString))
			{
				var dbCount = (await connection.QuerySingleAsync<int>(sql));
				return dbCount;
			}
		}
	}

}
