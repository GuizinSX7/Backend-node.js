//Chamar express

const express = require("express");

//Criando uma instancia com nome server

const server = express();

server.use(express.json());

//Deixar o server publico na porta 7777

server.listen(7777);

server.get('/zeca', (req, res) => {
    return res.send({zeca: 'Olá mundo!'});
});

server.get('/parametro', (req, res) => {
    const {name, idade} = req.query;
    return res.json({resultado: `Seu nome é ${name}, e sua idade é ${idade}`});
})

let produtos = [];

server.post('/produtos', (req, res) => {
    const {id, nome, preco} = req.body

    produtos.push({id: id, nome: nome, preco: preco});
    res.send({mensagem: "Sucesso!"});
})

server.get('/produtos', (req, res) => {
    res.send({Produtos: produtos});
})

server.put('/produto', (req, res) => {
    const {id, nome, preco} = req.body;
    const {outronome} = req.query;

    const posicao = produtos.findIndex(item => item.nome === outronome);

    produtos[posicao].nome = nome;
    produtos[posicao].preco = preco;
    produtos[posicao].id = id;
    res.send({Mensagem: "Sucesso!"});
})