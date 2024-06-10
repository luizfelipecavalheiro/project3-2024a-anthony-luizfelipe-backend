const { Abrigo } = require('../models');

exports.createAbrigo = async (req, res) => {
    try {
        const abrigo = await Abrigo.create(req.body);
        res.status(201).json(abrigo);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getAllAbrigos = async (req, res) => {
    try {
        const abrigos = await Abrigo.findAll();
        res.status(200).json(abrigos);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getAbrigoById = async (req, res) => {
    try {
        const abrigo = await Abrigo.findByPk(req.params.id);
        if (abrigo) {
            res.status(200).json(abrigo);
        } else {
            res.status(404).json({ erro: 'Abrigo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.updateAbrigo = async (req, res) => {
    try {
        const [atualizado] = await Abrigo.update(req.body, {
            where: { id: req.params.id }
        });
        if (atualizado) {
            const abrigoAtualizado = await Abrigo.findByPk(req.params.id);
            res.status(200).json(abrigoAtualizado);
        } else {
            res.status(404).json({ erro: 'Abrigo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.deleteAbrigo = async (req, res) => {
    try {
        const deletado = await Abrigo.destroy({
            where: { id: req.params.id }
        });
        if (deletado) {
            res.status(204).send();
        } else {
            res.status(404).json({ erro: 'Abrigo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};
