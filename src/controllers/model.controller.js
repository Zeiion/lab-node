const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { modelService } = require('../services');

const getModelList = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await modelService.queryModel(filter, options);
  res.send(result);
});

const getModel = catchAsync(async (req, res) => {
  const model = await modelService.getModelById(req.params.modelId);
  if (!model) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Model not found');
  }
  res.send(model);
});

module.exports = {
  getModelList,
  getModel,
};
