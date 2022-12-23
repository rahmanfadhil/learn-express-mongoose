import comment from "../models/comment"


  export async function createcomment (req, res) {
    const comments = new comment({
      
      comment:req.body.comment,
      email:req.body.email,
      blogId:req.params.id,
  });
  await comments.save();
  res.send(comments);
}

export async function deletecomment  (req, res)  {
    try {
     const va= await comment.deleteOne({ _id: req.params.id });
      res.status(204).send();
      res.json(va)
    } catch {
      res.status(404);
      res.send({ error: "comment doesn't exist!" });
    }
}
 
  export async function allcomments (req, res) {
    const comments = await comment.find({postId: req.params.id });
    res.send(comments);
    
  }
 
  export async function wholecomment(req, res) {
    const comments = await comment.find();
    res.send(comments);
  }
  export async function getWholeComment(req, res){
    const comments = await comment.find({blogId: req.params.id})
    res.send(comments)
  }