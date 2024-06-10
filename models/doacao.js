const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doacao = sequelize.define('Doacao', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, 
{
    timestamps: true,
});

module.exports = Doacao;
