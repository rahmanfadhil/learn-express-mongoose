import user from "../controller/login.js"

function authrole(req,res,next){
        console.log(req.user)
        if(req.user.role!=="admin"){
           res.status(401).send("not allowed")
        }
        next()
    }
   export default authrole