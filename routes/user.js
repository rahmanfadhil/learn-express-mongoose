import * as express from 'express';
import  authenticate  from '../middleware/authenticate';
import userValidation from '../validation/user';

import {oneuser, createuser, deleteuser, updateuser, whileuser} from "../controller/user"
import authrole from '../middleware/auth';
const router = express.Router();

router.get("/users", whileuser);

router.post("/users",userValidation,createuser);

router.get("/users/:id", oneuser);

router.patch("/users/:id",updateuser);

router.delete("/users/:id", deleteuser);


//module.exports = router;
export default router;
