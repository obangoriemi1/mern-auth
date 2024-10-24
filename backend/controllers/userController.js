import User from "../models/userModel.js"
import { errorHandler } from "../util/error.js"

import bcryptjs from "bcryptjs"

export const Test = (req, res) =>{

        res.json({
            messsage: "I will be great so great"
        })
    
}

//update user
export const updateUser = async(req, res, next) =>{
    if(req.user.id !== req.params.id){
       
        return next(errorHandler(401), "you can only update your account")
    }
    try {
        if(req.body.password){
            req.body.password =  bcryptjs.hashSync(req.body.password, 10)
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                  name: req.body.name,
                  email: req.body.email,
                  password: req.body.password,
                  profilePicture: req.body.profilePicture
                }
            },
            {new: true}
        );
        const {password, ...rest} = updatedUser._doc
        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};
//delete user functionality 

export const deleteUser = async (req, res, next ) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(401, "you can only delete your account!"))
    }
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    } catch (error) {
        next(error)
    }
}