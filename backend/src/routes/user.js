import { Router } from 'express'
import { getUsers, postUser } from "../controllers/user.controller.js";

const routerUser = Router()

routerUser.get('/', getUsers)
routerUser.post('/', postUser)

export default routerUser

/*
import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";
import passport from "passport";

const routerUser = Router()

routerUser.post("/register", passport.authenticate('register'), createUser)
routerUser.get("/:id", getUserById)

export default routerUser
*/