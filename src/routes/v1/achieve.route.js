const express = require('express');
const achieveController = require('../../controllers/achieve.controller');

const router = express.Router();

router.route('/list').get(achieveController.getAchieveList);

router.route('/:achieveId').get(achieveController.getAchieve);

module.exports = router;
