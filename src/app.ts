import express from 'express';

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.json({mensagem: "Olá, essa é minha primeira API"});
});

server.get('/api/saudacoes', (req, res) => {
    res.json({mensagem: "Saudações. Você acessou a rota /api/saudacoes"})
});

server.listen(3000, () => {
    console.log("Servidor executando no endereço http://localhost:3000");
});