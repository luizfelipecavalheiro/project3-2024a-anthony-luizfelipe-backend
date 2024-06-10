const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initModels } = require('./models');

const itemRoutes = require('./routes/itemRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const abrigoRoutes= require('./routes/abrigoRoutes');
const doacaoRoutes = require('./routes/doacaoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/itens', itemRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/abrigos', abrigoRoutes);
app.use('/api/doacoes', doacaoRoutes);

initModels().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.error('Erro ao inicializar os modelos:', err);
});

module.exports = app;
