import * as express from 'express';
import commentValidation from '../validation/comment';
import { createcomment, deletecomment,OneComment,wholecomment} from "../controller/comment"
const router = express.Router();

router.get("/comments",wholecomment );
router.post("/comments",commentValidation,createcomment);
router.delete("/comments/:id",deletecomment);
router.get("/comments/:id",OneComment);

export default router;
