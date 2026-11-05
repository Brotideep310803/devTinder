const adminAuth = (req,res, next)=>{
    const token = "xyz";
    const adminAuthorised = token === "xyz";

    if(!adminAuthorised){
        res.status(401).send("Unauthorised Request")
    }else{
        next();
    }
}

module.exports = {
    adminAuth
}