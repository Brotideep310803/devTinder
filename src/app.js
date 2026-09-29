const express = require("express");

const app = express();

app.use("/user",(req,res)=>{
    res.send("Server is running on user");
})

app.use("/student",(req,res)=>{
    res.send("Good Morning sir");
})

app.use("/",(req,res)=>{
    res.send("Server is running");
})

app.listen(3000, ()=>{
    console.log("Server is listening on port:3000");    
})