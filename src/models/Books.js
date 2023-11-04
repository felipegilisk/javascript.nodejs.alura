import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String, required: true },
    pages: { type: mongoose.Schema.Types.Number },
    price: { type: mongoose.Schema.Types.Number },
    genres: { type: mongoose.Schema.Types.Array }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;
