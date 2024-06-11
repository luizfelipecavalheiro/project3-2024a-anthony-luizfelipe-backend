const express = require('express');
const router = express.Router();
const abrigoController = require('../controllers/abrigoController');

router.post('/', abrigoController.createAbrigo);  // Observe a rota relativa
router.get('/', abrigoController.getAllAbrigos);
router.get('/:id', abrigoController.getAbrigoById);
router.put('/:id', abrigoController.updateAbrigo);
router.delete('/:id', abrigoController.deleteAbrigo);

module.exports = router;
