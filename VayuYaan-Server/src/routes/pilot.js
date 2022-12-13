const express = require("express");
const router = express.Router();
const pilotController = require('../controllers/pilot');

router.post('/create', pilotController.createPilot);
router.get('/', pilotController.viewPilots);
router.get('/:id', pilotController.viewPilot);
router.get('/email/:email', pilotController.viewPilotByEmail)
router.delete('/delete/:id', pilotController.deletePilot);
router.put('/edit/:id', pilotController.editPilot);

module.exports = router;