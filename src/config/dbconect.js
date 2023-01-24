import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:wtS96UxMcw1s7zEV@alura.d8qoms7.mongodb.net/alura-node")

let db = mongoose.connection;

export default db