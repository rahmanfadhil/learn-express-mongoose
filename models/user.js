import { Schema, model } from "mongoose";
import { genSalt, hash } from 'bcrypt'

const schema = Schema({
  names:{
    type:String,
  },
  email:{
    type:String,
  },
  browserId:{
    type:String,
  },
  password:{
    type:String,
    
  },
  role:{
    type:String,
    default:"user"
  }


});

schema.pre('save',async function(next){
  const salt = await genSalt()
  this.password = await hash(this.password,salt)
  next();
})



//export default model("creatUser", schema)
export default model("Users", schema);
