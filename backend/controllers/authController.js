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
        next(error)
    }
   
}
export const Google = async(req, res, next) =>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password: hashedPassword, ...rest} = user._id;
            const expiryDate = new Date(Date.now() + 3600000)
            res.cookie("access-token", token, {
               httpOnly: true, 
               expires: expiryDate
            }).status(200) .json(rest) 
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8); 
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10) 
            const newUser = new User({name: req.body.name.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 10000).toString(), email: req.body.email, password: hashedPassword, profilePicture: req.body.photo})
            await newUser.save()
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const {password: hashedPassword2, ...rest} = newUser._doc;
            const expiryDate = new Date(Date.now() + 36000000)
            res.cookie("access_token", token, {
                httpOnly: true,
                expires: expiryDate,

            }).status(200).json(rest) 
        }
    } catch (error) {
        next(error)
    }
};
export const Signout = (req,res) =>{
    res.clearCookie("access_token").status(200).json("Signout success")
}
