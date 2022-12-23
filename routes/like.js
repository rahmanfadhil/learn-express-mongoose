import * as express from 'express';
import {onelike, createlike, deletelike, updatelike, whilelike} from "../controller/like"
const router = express.Router();

router.get("/likes",whilelike );



router.post("/likes", createlike);

router.get("/likes/:id", onelike);

router.patch("/likes/:id",updatelike );

router.delete("/likes/:id", deletelike);


//module.exports = router;
export default router;
