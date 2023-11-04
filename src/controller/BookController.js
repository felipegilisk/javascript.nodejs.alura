import book from "../models/Books.js";

class bookController {

    static async bookList (req, res) {
        try {
            const fullBookList = await book.find({});
            res.status(200).json(fullBookList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error on bookList`})
        }
    }

    static async registerBook (req, res) {
        try {
            const newBook = await book.create(req.body)
            res.status(201).json({ message: "Sucesso", book: newBook});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error on registerBook`})
        }
    }

    static async findBookById (req, res) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error on findBookById`})
        }
    }

    static async updateBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "book updated"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error on updateBook`})
        }
    }

    static async deleteBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "book removed"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - error on findBookById`})
        }
    }
};

export default bookController;
