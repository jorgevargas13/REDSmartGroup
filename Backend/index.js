const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const recordController = require('./Record/Record');
const registroController = require('./Registro/Registro');

const app = express();
const server = http.createServer(app);
const port =  process.env.PORT || 5000;

app.use(cors({ origin: process.env.URLFRONT || 'http://localhost:3000', credentials: true }));

app.use(morgan('dev '));
app.use(express.json());

app.use('/api', recordController);
app.use('/api', registroController);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err });
});

server.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});