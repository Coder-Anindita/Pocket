import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import connectToDb from "./db/connectToDb.js"
import sendUserSample from "./controllers/sendUserSample.controller.js"
import authRoutes from "./routes/auth.route.js"




const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



const PORT=process.env.PORT || 5000


connectToDb()
.then(()=>{
    // app.post("/sample",sendUserSample)
    app.use("/api/auth", authRoutes);

    app.listen(PORT,()=>{
        console.log(`Listening to port ${PORT}`)
    })
})
.catch(err=>{
    console.log("Error occured while connecting to database")
    throw(err)
})