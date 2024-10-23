import express from "express"
import { Test, updateUser } from "../controllers/userController.js"
import { verifyToken } from "../util/verifyUser.js"


const router = express.Router() 

router.get("/", Test)
router.post("/update/:id", verifyToken, updateUser)
  
export default router