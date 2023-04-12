const { Team } = require('../models');

/**
 * Query for team list
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTeam = async (filter, options) => {
  const team = await Team.paginate(filter, options);
  return team;
};

/**
 * Get team by id
 * @param {ObjectId} id
 * @returns {Promise<Team>}
 * @throws {ApiError}
 */
const getTeamById = async (id) => {
  return Team.findById(id);
};
module.exports = {
  queryTeam,
  getTeamById,
};
