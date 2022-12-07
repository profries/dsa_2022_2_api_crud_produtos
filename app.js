const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/produtos", (req, res) => {
    const lista = [
        {
            id: 1,
            nome: "Produto 1",
            preco: 10
        },
        {
            id: 2,
            nome: "Produto 2",
            preco: 20
        }
    ];
    res.json(lista);

})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;

    const produto = {
        id: id,
        nome: "Produto 2",
        preco: 20
    }
    res.json(produto);
})

app.post("/produtos", (req, res) => {
    let produto = req.body;
    produto.id = 1;
    res.status(201).json(produto);
})

app.put("/produtos/:id", (req, res) => {
    const id = req.params.id;
    let produto = req.body;
    produto.id = id;
    res.json(produto);
})

app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    const produto = {
        id: id,
        nome: "Produto 2",
        preco: 20
    }
    res.json(produto);
})

app.listen(3000, () => {
    console.log ("Servidor iniciado na porta 3000");
})