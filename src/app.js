const express = require('express');

const app = express();

app.get("/user", (req, res)=>{
    res.send("Hello from the server");
});

app.post("/user", (req, res)=>{
    res.send("User Saved Successfully");
});

app.delete("/user", (req, res)=>{
    res.send("User Deleted Successfully");
});

app.listen(3000, ()=>{
    console.log("Server is successfully running on port 3000");

});

