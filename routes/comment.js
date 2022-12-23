import * as express from 'express';
import commentValidation from '../validation/comment';
import { createcomment, deletecomment, wholecomment} from "../controller/comment"
const router = express.Router();

router.get("/comments",wholecomment );
router.post("/comments/:id",commentValidation, createcomment);
router.delete("/comments/:id", deletecomment);

export default router;
