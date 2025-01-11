import express from 'express';
import {findUser, userLogin, userRegister} from '../controller/user.controller.js';
import { VerifyJwtToken } from '../Auth/authorization.js';
const router = express.Router();


router.post('/signup',userRegister);
router.post('/login',userLogin);
router.get('/finduser',VerifyJwtToken,findUser)

export default router