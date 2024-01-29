import express from "express";
import { signin, signup } from "../controllers/auth.ts";

const router = express.Router();

// Create a user
router.post("/signup", signup);


// Sign in
router.post("/signin", signin);

// OAuth
// router.post("/google", )

export default router;
