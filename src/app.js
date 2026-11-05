const express = require('express');

const app = express();

const {adminAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res, next)=>{   
    res.send("All Data sent successfully");    
});

app.get("/admin/deleteData", (req, res)=>{
    res.send("Data deleted");
})

app.listen(3000, ()=>{
    console.log("Server is successfully running on port 3000");

});

