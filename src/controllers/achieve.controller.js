const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { achieveService } = require('../services');

const getAchieveList = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await achieveService.queryAchieve(filter, options);
  res.send(result);
});

const getAchieve = catchAsync(async (req, res) => {
  const achieve = await achieveService.getAchieveById(req.params.achieveId);
  if (!achieve) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Achieve not found');
  }
  res.send(achieve);
});

module.exports = {
  getAchieveList,
  getAchieve,
};
