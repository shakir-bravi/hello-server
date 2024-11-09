import { Router } from "express";
import { LoginUser, Register } from "../controllers/user.controller.js";


const router = Router()


router.route("/").get(Register)
router.route("/login", LoginUser)

export {router }