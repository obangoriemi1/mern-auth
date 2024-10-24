import express from "express"
import { Signin, Signup, Google, Signout } from "../controllers/authController.js"

const router = express.Router() 

router.post("/signup", Signup) 
router.post("/signin", Signin)
router.post("/google", Google)
router.get("/signout", Signout)

export default router