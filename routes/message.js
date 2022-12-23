import * as express from 'express';
import messageValidation from '../validation/message';
import { createmessage, deletemessage, wholemessage} from "../controller/message"
const router = express.Router();

router.get("/messages",wholemessage );
router.post("/messages/:id",messageValidation, createmessage);
router.delete("/messages/:id", deletemessage);

export default router;
