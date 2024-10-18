import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import userRoute from "./backend/routes/userRoute.js" 
import authRoute from "./backend/routes/authRoute.js" 
//import cors from "cors"
dotenv.config()

const app = express()
app.use(express.json())
//app.use(cors())
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

//api routes
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

app.use((error, req,res, next) =>{
    const statusCode = error.statusCode || 500;
    const message = error.message || "internal server error"
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})