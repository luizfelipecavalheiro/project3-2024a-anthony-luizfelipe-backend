const { Usuario } = require('../models');

exports.createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const [atualizado] = await Usuario.update(req.body, {
            where: { id: req.params.id }
        });
        if (atualizado) {
            const usuarioAtualizado = await Usuario.findByPk(req.params.id);
            res.status(200).json(usuarioAtualizado);
        } else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const deletado = await Usuario.destroy({
            where: { id: req.params.id }
        });
        if (deletado) {
            res.status(204).send();
        } else {
            res.status(404).json({ erro: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};
