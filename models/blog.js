import { Schema, model } from "mongoose";

const blogschema = Schema({
  title: String,
  description :String,
  content: String,
  image: Object,
  like:Array,
  comment:Array,
});

export default model("blog", blogschema);
