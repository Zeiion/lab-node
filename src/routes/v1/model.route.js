const express = require('express');
const modelController = require('../../controllers/model.controller');

const router = express.Router();

router.route('/list').get(modelController.getModelList);

router.route('/:modelId').get(modelController.getModel);

module.exports = router;
