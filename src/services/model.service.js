const { Model } = require('../models');

/**
 * Query for model list
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryModel = async (filter, options) => {
  const model = await Model.paginate(filter, options);
  return model;
};

/**
 * Get model by id
 * @param {ObjectId} id
 * @returns {Promise<Model>}
 * @throws {ApiError}
 */
const getModelById = async (id) => {
  return Model.findById(id);
};
module.exports = {
  queryModel,
  getModelById,
};
