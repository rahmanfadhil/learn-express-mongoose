import * as express from 'express';
import messageValidation from '../validation/message';
import {createmessage, allmessage} from "../controller/message"
const router = express.Router();

router.get("/messages",allmessage );
router.post("/messages/:id",messageValidation, createmessage);


export default router;
