import User from "../models/userModel.js"
import bcryptjs from "bcryptjs"

export const Signup = async(req,res, next) =>{
   const {name, email, password} = req.body
   const hashedPassword = bcryptjs.hashSync(password, 10)
   const newUser = new User ({name, email, password: hashedPassword})
   try {
     await newUser.save()
      res.status(201).json({message: "user created successfully"})
   } catch (error) {
    next(error)
   }
 
}