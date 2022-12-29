// import message from "../models/message"


// export async function createmessage(req, res) {
//   try {
//     const messages = new message({
//       message: req.body.message,
//       email: req.body.email,
//     });
//     await messages.save();
//     res.send(messages);
//   } catch (error) {
//     res.status(500);
//     res.send({ error: error.message });
//   }
// }



 
// export async function allmessage(req, res) {
//   try {
//     const messages = await message.find({ postId: req.params.id });
//     res.send(messages);
//   } catch (error) {
//     res.status(500);
//     res.send({ error: error.message });
//   }
// }

 
 