import express from "express"
import { Test, updateUser, deleteUser } from "../controllers/userController.js"
import { verifyToken } from "../util/verifyUser.js"


const router = express.Router() 

router.get("/", Test)
router.post("/update/:id", verifyToken, updateUser)
router.delete("/delete/:id", verifyToken, deleteUser)
  
export default router