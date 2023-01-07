import { Schema, model } from "mongoose";


const schema = Schema({

  message: String,
  email:String,

});

export default model("message", schema);