const { Achieve } = require('../models');

/**
 * Query for achieve list
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAchieve = async (filter, options) => {
  const achieve = await Achieve.paginate(filter, options);
  return achieve;
};

/**
 * Get achieve by id
 * @param {ObjectId} id
 * @returns {Promise<Achieve>}
 * @throws {ApiError}
 */
const getAchieveById = async (id) => {
  return Achieve.findById(id);
};
module.exports = {
  queryAchieve,
  getAchieveById,
};
