import { Router } from "express"
import loginpost  from "../controller/login.js"
const login = Router()

login.get("/login", loginpost)

export default login