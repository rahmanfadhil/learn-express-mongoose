import { Schema, model } from "mongoose";

const blogschema = Schema({
  title: String,
  description :String,
  content: String,
  image: Object,
  like:Array,
  comments:[{type:Schema.Types.ObjectId, ref:'comment'}],
});

export default model("Blog", blogschema);
