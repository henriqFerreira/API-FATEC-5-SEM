const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.post('/', teamController.createTeam);
router.get('/', teamController.getAllTeams);
router.get('/:id', teamController.getTeamById);
router.patch('/:id', teamController.updateTeam);
router.delete('/:id', teamController.deleteTeam);

module.exports = router;
