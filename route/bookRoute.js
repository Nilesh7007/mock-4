const express = require("express");

const bookRouter = express.Router();

const BookModel = require("../model/bookModel");


// add new book

bookRouter.post("/book", async(req,res) =>{

    const { title,
        author,
        genre,
        description,
        price
    } = req.body
    try {
        const book = new BookModel(req.body)
        await book.save();
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({msg:"failed to add book"})
    }
})

// get all book

bookRouter.get("/book", async(req,res) =>{
    try {
        const books = await BookModel.find();

        res.status(201).json(books);
    } catch (error) {
        res.status(400).json({msg:"failed to get books"})
    }
})

// - Delete Book API

bookRouter.delete("/book/:id", async(req,res) =>{

    const {id} = req.params;
    try {
        await BookModel.findByIdAndDelete(id)

        res.status(201).json({msg:"book deleted sucessfully"});
    } catch (error) {
        res.status(400).json({msg:"failed to delete books"})
    }
})

// - Filter Books API

bookRouter.get("/filterbook", async(req,res) =>{
    const {genre} = req.query
    try {
        const books = await BookModel.find({genre});

        res.status(201).json(books)
    } catch (error) {
        res.status(400).json({msg:"failed to get filtered books"})
    }
})
// - Sort Books API

bookRouter.get("/sortbook", async(req,res) =>{

   try {
    const books = await BookModel.find().sort({price:1})
    res.status(201).json(books)
   } catch (error) {
    res.status(400).json({msg:"failed to get sorted books"})
   }
})


module.exports = bookRouter;