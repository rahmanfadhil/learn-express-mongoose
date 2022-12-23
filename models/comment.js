import { Schema, model } from "mongoose";


const schema = Schema({

 
  comment: String,
  email:String,
  blogId:{type:Schema.Types.ObjectId, ref:'Blog'},
       

  
});

export default model("comment", schema);