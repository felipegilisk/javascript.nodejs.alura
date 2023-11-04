import express from "express";
import mongoConnection from "./db/mongo_conn.js";
import routes from "./routes/index.js";

const conexao = await mongoConnection();
const app = express();

conexao.on("error", (erro) => {
    console.error("Erro de conexao ", erro);
});

conexao.once("open", () => {
    console.log("Mongo connection is running")
});

routes(app);


export default app;