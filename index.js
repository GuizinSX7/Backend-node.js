//Chamar express

const express = require("express");

//Criando uma instancia com nome server

const server = express();

server.use(express.json());

//Deixar o server publico na porta 3000

server.listen(3000);

server.get('/zeca', (req, res) => {
    return res.send({zeca: 'Olá mundo!'})
})