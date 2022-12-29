// import blog from "../models/blog";
// import like from "../models/like"


// export async function createlike(req, res) {
//   const likes = new like({
//     like: req.body.like,
//     email: req.body.email,
    
//   });
//   await likes.save();
//   await blog.updateOne({ _id: req.body.blogId }, { $inc: { likes: 1 } });
//   res.send(likes);
// }


//   export async function alllikes(req, res) {
//   const likes = await like.aggregate([
//     { $group: { _id: '$blogId', count: { $sum: '$count' } } }
//   ]);
//   res.send(likes);
// }

