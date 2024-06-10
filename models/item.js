const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Abrigo = require('./abrigo');

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abrigoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Abrigo,
            key: 'id',
        },
    },
}, 
{
    timestamps: true,
});

module.exports = Item;
