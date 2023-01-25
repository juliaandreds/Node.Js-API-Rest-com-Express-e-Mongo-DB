import express from "express";
import livros from "./livrosRouter.js";

const routes = (app) => {
    app.route('/').get ((req, res) => {
        res.status(200).send({titulo: "curso node"});    
    })


    app.use (
        express.json(),
        livros
    );

}

export default routes;