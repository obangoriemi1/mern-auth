import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log("mongodb connected")
})
.catch((error) =>{
   console.log(error)
})

app.listen(3000, () =>{
    console.log("sever listening on port 3000!")
})     