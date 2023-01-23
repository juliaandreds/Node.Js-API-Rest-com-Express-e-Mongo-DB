import express, { json } from "express";

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

function buscaLivros (id) {
    return livros.findIndex(livros => livros.id == id)
}
export default app