import express from "express"
import addIncome from "../controllers/income/addIncome.controller.js";
import protectedFunction from "../middleware/protected.middleware.js";
const router = express.Router();

router.post("/",protectedFunction,addIncome)
export default router