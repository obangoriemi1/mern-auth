import express from "express"
import { Test } from "../controllers/userController.js"

const router = express.Router() 

router.get("/", Test)
  
export default router