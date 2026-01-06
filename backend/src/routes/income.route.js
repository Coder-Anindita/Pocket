import express from "express"
import addIncome from "../controllers/income/addIncome.controller.js";
import protectedFunction from "../middleware/protected.middleware.js";
import allIncome from "../controllers/income/allIncome.controller.js";
import deleteIncome from "../controllers/income/deleteIncome.controller.js";
const router = express.Router();

router.post("/",protectedFunction,addIncome)
router.get("/",protectedFunction,allIncome)
router.delete("/:id",protectedFunction,deleteIncome)
export default router