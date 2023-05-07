const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: "Fabiana Treza",
        imagem: "https://avatars.githubusercontent.com/u/109351531?v=4",
        minibio: "Estudante de programação e mamãe de duas princesas"

    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);