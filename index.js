const express = require("express");
const app = express();
//Estou dizendo para o express usar o EJS como 'view engine'
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {

    var nome = "Rafaela Marraschi";
    var lang = "Javascript";
    res.render("index", {
        nome: req.params.nome,
        lang: req.params.lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: false
    });
});

app.listen(8080, () => {
    console.log("App rodando!!");
});