const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { dataService } = require('../services');

const getDataList = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await dataService.queryData(filter, options);
  res.send(result);
});

const getData = catchAsync(async (req, res) => {
  const data = await dataService.getDataById(req.params.dataId);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
  }
  res.send(data);
});


module.exports = {
  getDataList,
  getData,
};
