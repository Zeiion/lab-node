const express = require('express');
const dataController = require('../../controllers/data.controller');

const router = express.Router();

router.route('/list').get(dataController.getDataList);

router.route('/:dataId').get(dataController.getData);

module.exports = router;
