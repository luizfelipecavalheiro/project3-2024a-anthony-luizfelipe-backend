const { Doacao } = require('../models');

exports.createDoacao = async (req, res) => {
    try {
        const doacao = await Doacao.create(req.body);
        res.status(201).json(doacao);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getAllDoacoes = async (req, res) => {
    try {
        const doacoes = await Doacao.findAll();
        res.status(200).json(doacoes);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getDoacaoById = async (req, res) => {
    try {
        const doacao = await Doacao.findByPk(req.params.id);
        if (doacao) {
            res.status(200).json(doacao);
        } else {
            res.status(404).json({ erro: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.updateDoacao = async (req, res) => {
    try {
        const [atualizado] = await Doacao.update(req.body, {
            where: { id: req.params.id }
        });
        if (atualizado) {
            const doacaoAtualizada = await Doacao.findByPk(req.params.id);
            res.status(200).json(doacaoAtualizada);
        } else {
            res.status(404).json({ erro: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.deleteDoacao = async (req, res) => {
    try {
        const deletado = await Doacao.destroy({
            where: { id: req.params.id }
        });
        if (deletado) {
            res.status(204).send();
        } else {
            res.status(404).json({ erro: 'Doação não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};
