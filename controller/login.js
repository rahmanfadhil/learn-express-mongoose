import login from "../models/login"
import user from "../models/user.js"
import con from 'bcrypt'
import pkg from "jsonwebtoken"
import {} from 'dotenv/config'
const { sign } = pkg;
const { compare } = con

const handleErrors=(err)=>{
    // console.log(err.message,err.code);
    let errors={
        email:'',
        pwd:''
    }
    if(err.code===11000){
        errors.email=" that email is already registered"
    }

    if(err.message.includes("login validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        
        })
    }
    return errors
}



export default async function loginpost(req,res){
    
    try{
    const uasers = await user.find()
     console.log(uasers)
    const auser = uasers.find(user=>user.email===req.body.email)
    // console.log(auser)
    if(!auser){
        return res.status(400).send("couldn't find the user")
    }
    if (await compare(req.body.password, auser.password)){
        const useremail = req.body.email
        const userId = auser.id
        const useRole = auser.role
        const user = { email: useremail,id: userId,role:useRole}

        const accesstoken = sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({accesstoken:accesstoken,user:user})
        // console.log(user)
        // res.send("successfully logged in")
    }
    else{
        res.send("doesn't match")
    }
    // await auser.save()
   }
   catch(err){
    const errors = handleErrors(err);
    res.status(400).json(errors)
   }

   
}