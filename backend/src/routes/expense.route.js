import express from "express"
import protectedFunction from "../middleware/protected.middleware.js"
import addExpense from "../controllers/expense/addExpense.controller.js"
import allExpense from "../controllers/expense/allExpense.controller.js"
import deleteExpense from "../controllers/expense/deleteExpense.controller.js"
const router=express.Router()


router.post("/",protectedFunction,addExpense)
router.get("/",protectedFunction,allExpense)
router.delete("/:id",protectedFunction,deleteExpense)
export default router