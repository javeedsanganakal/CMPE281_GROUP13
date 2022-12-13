const express = require("express");
const router = express.Router();
const farmerController = require('../controllers/farmer');

router.post('/create', farmerController.createFarmer);
router.get('/', farmerController.viewFarmers);
router.get('/:id', farmerController.viewFarmer);
router.get('/email/:email', farmerController.viewFarmerByEmail)
router.delete('/delete/:id', farmerController.deleteFarmer);
router.put('/edit/:id', farmerController.editFarmer);

module.exports = router;