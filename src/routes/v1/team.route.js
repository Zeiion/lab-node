const express = require('express');
const teamController = require('../../controllers/team.controller');

const router = express.Router();

router.route('/list').get(teamController.getTeamList);

router.route('/:teamId').get(teamController.getTeam);

module.exports = router;
