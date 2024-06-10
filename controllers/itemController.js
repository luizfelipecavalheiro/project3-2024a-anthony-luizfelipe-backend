const { Item } = require('../models');

exports.createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getAllItens = async (req, res) => {
    try {
        const itens = await Item.findAll();
        res.status(200).json(itens);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ erro: 'Item não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const [atualizado] = await Item.update(req.body, {
            where: { id: req.params.id }
        });
        if (atualizado) {
            const itemAtualizado = await Item.findByPk(req.params.id);
            res.status(200).json(itemAtualizado);
        } else {
            res.status(404).json({ erro: 'Item não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const deletado = await Item.destroy({
            where: { id: req.params.id }
        });
        if (deletado) {
            res.status(204).send();
        } else {
            res.status(404).json({ erro: 'Item não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};
