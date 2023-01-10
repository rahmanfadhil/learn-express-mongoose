import user from "../models/user"
// const user = require('../models/user')

export async function oneuser  (req, res){
  try {
    const users = await user.findOne({ _id: req.params.id });
    if(!users){
       res.status(404);
    res.send({ error: "user doesn't exist!" });
    }
    res.send(users);
  } catch(error) {
    res.status(500);
    res.send({ error: error.message });
  }
}



  export async function createuser (req, res) {
    const newUser = new user({
      names: req.body.names,
      email: req.body.email,
      password :req.body.password,
      role:req.body.role,
    
  });
  await newUser.save();
  res.send(newUser);
}

export async function deleteuser  (req, res)  {
    try {
     const va= await user.deleteOne({ _id: req.params.id });
     if(!user){
      res.status(404);
      res.send({ error: "user doesn't exist!" });
     }
      res.status(204).send();
      res.json(va)
    } catch(error) {
      res.status(500);
      res.send({ error: error.message });
    }
     
    
  }

  export async function updateuser (req, res) {
    try {
      const user = await user.findOne({ _id: req.params.id });
  
      if (req.body.names) {
        user.names = req.body.names;
      }
  
      if (req.body.email) {
        user.email = req.body.email;
      }
  
      await user.save();
      res.send(user);
    } catch {
      res.status(404);
      res.send({ error: "user doesn't exist!" });
    }
  }
 
  export async function whileuser(req, res) {
    const users = await user.find();
    res.send(users);
  }