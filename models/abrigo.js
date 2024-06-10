const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Abrigo = sequelize.define('Abrigo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    timestamps: true,
});

module.exports = Abrigo;
