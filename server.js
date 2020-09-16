const express =  require('express'); // importar o módulo express
const server = express(); // instaciar o express
const dotenv = require('dotenv').config(); // importar e configurar o módulo

//Configurações
server.use(express.json()); // permitir resposta ao cliente em formato JSON


//Rotas
server.use(require('./src/routes'));


server.listen(process.env.PORT); // criar o servidor e fazê-lo escutar em uma porta. neste caso a 3002.
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);