import User from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../util/error.js"
import jwt from "jsonwebtoken"

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

export const Signin = async(req,res, next) =>{
    const {email, password} = req.body
    try {
      const valideUser = await User.findOne({email})  
      if(!valideUser) return next(errorHandler(404, "User not found"))
      const validPassword = bcryptjs.compareSync(password, valideUser.password)
       if(!validPassword) return next(errorHandler(401, "wrong credentials"))
       const token = jwt.sign({id: valideUser._id}, process.env.JWT_SECRET)
       const {password: hashedPassword, ...rest} = valideUser._doc
       const expiryDate = new Date(Date.now() + 3600000)
        res.cookie("access_token", token, {httpOnly: true, expires: expiryDate}).status(200).json(rest);
    } catch (error) {
        next()
    }
}
