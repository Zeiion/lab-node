const { Data } = require('../models');

/**
 * Query for data list
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryData = async (filter, options) => {
  const data = await Data.paginate(filter, options);
  return data;
};

/**
 * Get data by id
 * @param {ObjectId} id
 * @returns {Promise<Data>}
 * @throws {ApiError}
 */
const getDataById = async (id) => {
  return Data.findById(id);
};
module.exports = {
  queryData,
  getDataById,
};
