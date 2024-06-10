const express = require('express');
const router = express.Router();
const abrigoController = require('../controllers/abrigoController');

router.post('/abrigos', abrigoController.createAbrigo);
router.get('/abrigos', abrigoController.getAllAbrigos);
router.get('/abrigos/:id', abrigoController.getAbrigoById);
router.put('/abrigos/:id', abrigoController.updateAbrigo);
router.delete('/abrigos/:id', abrigoController.deleteAbrigo);

module.exports = router;
