import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Mensagem teste :D");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

const livros = [
    {
        id: 1,
        title: "Senhor dos Aneis"
    },
    {
        id: 2,
        title: "Segundo Livro"
    }
]

export default app;