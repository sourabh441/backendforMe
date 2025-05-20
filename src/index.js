// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
  path:'./env'
})




connectDB()
.then(()=>{

  app.on('error',(error)=>{
    console.error("ERROR", error);
    
  })

  app.listen(process.env.PORT||8000)
  console.log(`server is running on the port ${process.env.PORT}`);
  
})
.catch((errror)=>{
  console.error("mongodb connsection FAILED", Error);
  
})






















/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR:", error);
    throw err;
  }
})();
*/