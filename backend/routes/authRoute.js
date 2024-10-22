import express from "express"
import { Signin, Signup, Google } from "../controllers/authController.js"

const router = express.Router() 

router.post("/signup", Signup) 
router.post("/signin", Signin)
router.post("/google", Google)

export default router