const express = require('express');
const routes = express.Router();
const musculacaoController = require('./controllers/musculacao')
//req -> requisição do cliente
//res -> resposta do servidor
routes.get('/', function(req, res){
    res.send('Bem vindo ao meu servidor NodeJS.');


})

routes.get('/cursos', (req, res)=>{
    res.json({

        "web" : "React",
        "mobile" : "React Native",
        "ML": "Data Science"
    });
});

// REQ => // body, header, params
routes.post('/cursos', (req, res) =>{
    const response = req.body;
    res.json(response);

});

routes.post('/alunos', (req, res) =>{

    const response = req.body;
    res.status(200).send();
    console.log(`Bem vindo, ${response.nome} ${response.sobrenome}!`);
})
// Capturando parametros de requisição pela URL
routes.post('/prog/:nome', (req, res) =>{
    const response = req.params.nome;
    res.send(response);

})

routes.post('/diretoria/?nome', (req, res) =>{
    const nome = req.query.nome;
    const idade = req.query.idade;
    const sexo = req.query.sexo;
    res.send(`${nome} ${idade} ${sexo}`);

})
routes.post('/matricula', musculacaoController.planoMusculacao)

module.exports = routes;