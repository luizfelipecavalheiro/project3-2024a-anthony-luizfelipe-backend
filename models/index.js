//const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Item = require('./item');
const Usuario = require('./usuario');
const Abrigo = require('./abrigo');
const Doacao = require('./doacao');

Abrigo.hasMany(Item, { foreignKey: 'abrigoId' });
Item.belongsTo(Abrigo, { foreignKey: 'abrigoId' });

Abrigo.hasMany(Usuario, { foreignKey: 'abrigoId' });
Usuario.belongsTo(Abrigo, { foreignKey: 'abrigoId' });

Item.hasMany(Doacao, { foreignKey: 'itemId' });
Doacao.belongsTo(Item, { foreignKey: 'itemId' });

const initModels = async () => {
    await sequelize.sync();
};

module.exports = {
    initModels,
    Item,
    Usuario,
    Abrigo,
    Doacao,
};
