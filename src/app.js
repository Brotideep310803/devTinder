const express = require('express');

const app = express();



app.use("/home", (req, res)=>{
    res.send("Hello from the server");
});

app.use("/hello", (req, res)=>{
    res.send("Hello Hello Hello");
});

app.use("/", (req, res)=>{
    res.send("Hello from the Dashboard");
});

app.listen(3000, ()=>{
    console.log("Server is successfully running on port 3000");

});

