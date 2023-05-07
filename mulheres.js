const { response } = require("express");
const express = require("express"); //aqui estou iniciando o express
const router = express.Router(); //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); //chamando a bliblioteca uuid que gera id automaticamente

const app = express(); // aqui estou iniciando o app
app.use(express.json());
const porta = 3333; //aqui estou criando a porta    

//aqui estou criando lista inicial de mulheres 
const mulheres = [
    {
        id: 1,
        nome: "Fabiana Treza",
        imagem: "https://avatars.githubusercontent.com/u/109351531?v=4",
        minibio: "Estudante de programação e mamãe de duas princesas"
    },

    {
        id: 2,
        nome: "Maria Julia",
        imagem: "https://avatars.githubusercontent.com/u/109351531?v=4",
        minibio: "Adolescente que ama se maquiar"
    },


    {
        id: 3,
        nome: "Maria Fernanda",
        imagem: "https://avatars.githubusercontent.com/u/109351531?v=4",
        minibio: "Mini princesa apaixonada por joguinhos"
    }
]

//GET

function mostraMulheres(request, response) {
    response.json(mulheres);
}

//POST
function criaMulher(request, reponse) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome, //solicitando o que a pessoa preencheu no campo nome
        imagem: request.body.imagem,
        minibio: request.body.minibio

    }

    mulheres.push(novaMulher);

    response.json(mulheres);
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher);

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres);
}


app.use(router.get("/mulheres", mostraMulheres)); //configurei rota GET /mulheres
app.use(router.post("/mulheres", criaMulher)); //configurei rota Post /mulheres
app.use(router.patch('/mulheres /:id',)); //configurei a rota Patch /mulheres/:id

//Porta
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

app.listen(porta, mostraPorta); //servidor ouvindo a porta