
const mongoose = require ("mongoose");

const bookSchema = mongoose.Schema({


    title: String,
    author:String,
    genre: String,
    description:String,
    price:Number,

},{
    versionKey:false
})

const BookModel = mongoose.model("Book",bookSchema);

module.exports = BookModel;


// {
//     "title": "wings of fire",
//     "author":"kalam",
//     "genre": "Fiction",
//     "description":"very good book",
//    "price":400,
// }