const express = require("express");
const router = express.Router();
const droneController = require('../controllers/drone');

router.post('/create', droneController.createDrone);
router.get('/', droneController.viewDrones);
router.get('/:id', droneController.viewDrone);
router.delete('/delete/:id', droneController.deleteDrone);
router.put('/edit/:id', droneController.editDrone);

module.exports = router;