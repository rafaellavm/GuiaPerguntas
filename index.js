const express = require("express");
const app = express();
//Estou dizendo para o express usar o EJS como 'view engine'
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render("home.ejs");
});

app.listen(8080, () => {
    console.log("App rodando!!");
});