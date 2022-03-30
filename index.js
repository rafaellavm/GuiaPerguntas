const express = require("express");
const app = express();
//Estou dizendo para o express usar o EJS como 'view engine'
app.set('view engine', 'ejs');
//quero utilizar arquivos estáticos
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {

    var nome = "Rafaela Marraschi";
    var lang = "Javascript";

    var produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Coca-Cola", preco: 5 },
        { nome: "Leite", preco: 7 }
    ]

    res.render("index", {
        nome: req.params.nome,
        lang: req.params.lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: false,
        produtos: produtos
    });
});

app.listen(8080, () => {
    console.log("App rodando!!");
});