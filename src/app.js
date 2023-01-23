import express from "express";

const app = express();

const livros = [
    {id: 1, titulo: "Senhos dos Anéis"},
    {id: 2, título: "Hobbit"}
]

app.get ('/', (req,res) => {
    res.status(200).send ('Curso de Node');
})

app.get ('/livros', (req,res) => {
    res.status (200).json(livros);
})

export default app