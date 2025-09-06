

import express from 'express'
import { isAuth, loginUser, logout, registerUser } from '../controllers/userController.js'
import authUser from '../middleware/authUser.js'

const userRouter= express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get('/is-auth', authUser , isAuth)
userRouter.get('/logout', logout)


export default userRouter 