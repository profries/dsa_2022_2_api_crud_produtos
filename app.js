const express = require('express');
const app = express();

app.get("/produtos", (req, res) => {
    res.send("Listar produtos");
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Buscar produto: "+ id);
})

app.post("/produtos", (req, res) => {
    res.send("Inserir produto");
})

app.put("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Atualizar produto: "+id);
})

app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Deletar produto: "+ id);
})

app.listen(3000, () => {
    console.log ("Servidor iniciado na porta 3000");
})