import message from "../models/message"


  export async function createmessage (req, res) {
    const messages = new message({
      
      message:req.body.message,
      email:req.body.email,
      blogId:req.params.id,
  });
  await messages.save();
  res.send(messages);
}

export async function deletemessage  (req, res)  {
    try {
     const va= await message.deleteOne({ _id: req.params.id });
      res.status(204).send();
      res.json(va)
    } catch {
      res.status(404);
      res.send({ error: "message doesn't exist!" });
    }
}
 
  export async function allmessages (req, res) {
    const messages = await message.find({postId: req.params.id });
    res.send(messages);
    
  }
 
  export async function wholemessage(req, res) {
    const messages = await message.find();
    res.send(messages);
  }
  export async function getWholemessage(req, res){
    const messages = await message.find({blogId: req.params.id})
    res.send(messages)
  }