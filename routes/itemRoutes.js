const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/itens', itemController.createItem);
router.get('/itens', itemController.getAllItens);
router.get('/itens/:id', itemController.getItemById);
router.put('/itens/:id', itemController.updateItem);
router.delete('/itens/:id', itemController.deleteItem);

module.exports = router;
