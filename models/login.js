import { Schema, model } from "mongoose";


const schema = Schema({
  
  email:{
    type:String,
   
   
 
  },
  password:{
    type:String,
    
  }


});

//export default model("creatUser", schema)
export default model("login", schema);
