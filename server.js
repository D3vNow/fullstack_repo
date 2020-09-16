const express =  require('express'); // importar o módulo express
const server = express(); // instaciar o express
const dotenv = require('dotenv').config(); // importar e configurar o módulo

//Rotas
//req -> requisição do cliente
//res -> resposta do servidor
server.get('/', function(req, res){
    res.send('Bem vindo ao meu servidor NodeJS.');


})

server.get('/cursos', function(req, res){
    res.json({

        "web" : "React",
        "mobile" : "React Native",
        "ML": "Data Science"
    });
});

server.listen(process.env.PORT); // criar o servidor e fazê-lo escutar em uma porta. neste caso a 3002.
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);