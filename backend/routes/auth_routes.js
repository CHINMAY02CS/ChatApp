import express from "express";
import { login, logout, signup } from '../controllers/auth.controller.js'

const router = express.Router()

//we will use controllers for routing 

//LOGIN Route
router.post("/login",login)

//SIGNUP Route
router.post("/signup",signup)

//LOGOUT Route
router.post("/logout",logout)


export default router