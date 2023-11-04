import express from "express";
import bookController from "../controller/BookController.js";

const routes = express.Router();

routes.get("/livros", bookController.bookList);
routes.get("/livros/:id", bookController.findBookById);
routes.post("/livros", bookController.registerBook);
routes.put("/livros/:id", bookController.updateBook);
routes.delete("/livros/:id", bookController.deleteBook);

export default routes;
