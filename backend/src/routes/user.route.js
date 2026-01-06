import getCurrentUser from "../controllers/getCurrentUser.controller.js";
import protectedFunction from "../middleware/protected.middleware.js";
import express from "express"
const router=express.Router()
router.get("/", protectedFunction, getCurrentUser);
export default router