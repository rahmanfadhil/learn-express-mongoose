import { Schema, model } from "mongoose";

const blogschema = Schema({
  title: String,
  description :String,
  content: String,
  image: Object,
  likes:[{type:Schema.Types.ObjectId, ref:'Users'}],
  comments:[{type:Schema.Types.ObjectId, ref:'comment'}],
});

export default model("Blog", blogschema);
