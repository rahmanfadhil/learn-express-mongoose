import blog from "../models/blog"

export async function oneblog  (req, res){
    try {
      const oneblog = await blog.findOne({ _id: req.params.id }).populate('comments');
      if (!oneblog) {
        res.status(404);
        res.send({ error: "blog doesn't exist!" });
      }
      res.send(oneblog);
    } catch(error) {
      res.status(500);
      res.send({ error: error.message });
    }
  }


  export async function createblog (req, res) {
    try{
      const imageLink = `localhost:5000/upload/${req.file.filename}`
      const newblog = new blog({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        image: imageLink,
        like:req.body.like,
        comment:req.body.comment
    
    });
    await newblog.save();
    res.send(newblog);
    console.log(".."+newblog)

    } catch(err){
      console.log(err.message)
    }
    
}

export async function deleteblog  (req, res)  {
    try {
     const va= await blog.deleteOne({ _id: req.params.id });
      res.status(204).send();
      res.json(va)
    } catch {
      res.status(404);
      res.send({ error: "blog doesn't exist!" });
    }
  }

  export async function updateblog (req, res) {
    try {
      const blog = await blog.findOne({ _id: req.params.id });
  
      if (req.body.title) {
        blog.title = req.body.title;
      }
  
      if (req.body.content) {
        blog.content = req.body.content;
      }
  
      await blog.save();
      res.send(blog);
    } catch {
      res.status(404);
      res.send({ error: "blog doesn't exist!" });
    }
  }
 
  export async function wholeblog(req, res) {
    const blogs = await blog.find();
    res.send(blogs)
  }