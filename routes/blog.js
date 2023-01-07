import * as express from 'express';
import {oneblog, createblog, deleteblog, updateblog, wholeblog, like} from "../controller/blog";
// import { createcomment, deletecomment, getWholeComment} from "../controller/comment"
import authenticate from '../middleware/authenticate';
import blogValidation from '../validation/blog';
const router = express.Router();
import multer from "multer";

//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
})
var uploadedFile = multer({ storage: storage })


router.get("/blogs",wholeblog);



router.post("/blogs",authenticate,uploadedFile.single('image'),createblog);

router.get("/blogs/:id", oneblog);

router.patch("/blogs/:id",updateblog );

router.delete("/blogs/:id", deleteblog);
router.post("/blogs/:id/like", like);


export default router;
