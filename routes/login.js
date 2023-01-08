import { Router } from "express"
import loginpost  from "../controller/login.js"
const login = Router()

login.post("/login", loginpost)

export default login