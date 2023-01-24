import express, { json } from "express";
import db from "./config/dbconect.js";

db.on ("error", console.log.bind (console, 'Erro de conexão'));
db.once("open", () => {
    console.log ('A conexão com o banco foi feita com sucesso')
})

const app = express();

app.use (express.json());

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

app.get ('/livros/:id', (req,res) => {
    let index = buscaLivros (req.params.id);
    res.json(livros[index])
    
})

app.post ('/livros', (req,res) => {
    livros.push (req.body);
    res.status(201).send('livro cadastrado com sucesso')    
})

app.put ('/livros/:id', (req,res) => {
    let index = buscaLivros (req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros)
    
})

app.delete ('/livros/:id', (req,res) => {
    let {id} = req.params;
    let index = buscaLivros (id);
    livros.splice (index, 1);
    res.send (`Livro ${id} removido com sucesso!`)
    
})

function buscaLivros (id) {
    return livros.findIndex(livros => livros.id == id)
}
export default app