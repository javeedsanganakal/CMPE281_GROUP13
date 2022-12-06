const express = require("express");
const router = express.Router();
const farmController = require('../controllers/farm');

router.post('/create', farmController.createFarm);
router.get('/', farmController.viewFarms);
router.get('/:id', farmController.viewFarm);
router.delete('/delete/:id', farmController.deleteFarm);
router.put('/edit/:id', farmController.editFarm);

module.exports = router;