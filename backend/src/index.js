import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"

import connectToDb from "./db/connectToDb.js"
import sendUserSample from "./controllers/sendUserSample.controller.js"
import authRoutes from "./routes/auth.route.js"
import incomeRoutes from "./routes/income.route.js"
import expenseRoutes from "./routes/expense.route.js"



const app=express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


const PORT=process.env.PORT || 5000


connectToDb()
.then(()=>{
    // app.post("/sample",sendUserSample)
    app.use("/api/auth", authRoutes);
    app.use("/api/income",incomeRoutes)
    app.use("/api/expense",expenseRoutes);

    app.listen(PORT,()=>{
        console.log(`Listening to port ${PORT}`)
    })
})
.catch(err=>{
    console.log("Error occured while connecting to database")
    throw(err)
})