const express = require("express");

const cors = require("cors");

const connection = require("./db");

const bookRouter = require("./route/bookRoute")


const app = express();

app.use(express.json());

app.use(cors());

app.use("/book", bookRouter)

app.get("/", (req,res)=>{
    res.send("This is home")
})

app.listen(5060, async() =>{
    try {
        await connection
        console.log("connected to atlas database !!!!!!")
    } catch (error) {
        console.log(error)
    }
    console.log("server run on port 5060")
})