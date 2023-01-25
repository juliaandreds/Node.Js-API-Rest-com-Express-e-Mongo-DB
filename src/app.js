import express from "express";
import db from "./config/dbconect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on ("error", console.log.bind (console, 'Erro de conexão'));
db.once("open", () => {
    console.log ('A conexão com o banco foi feita com sucesso')
})

const app = express();

//o que chega tanto do postman como daqui
app.use(express.json());

routes(app);






/* app.get ('/livros', (req,res) => {
    livros.find ((err, livros) => {
        res.status(200).json(livros);
    })
}) */


app.get ('/livros/:id', (req,res) => {
    let index = buscaLivros (req.params.id);
    res.json(livros[index])
    
})

app.post ('/livros', (req,res) => {
    livros.push (req.body);
    res.status(201).send('livro cadastrado com sucesso')    
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
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