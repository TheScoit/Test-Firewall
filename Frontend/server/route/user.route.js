import express, { Router } from 'express'
import { Login, Logout, Signup ,verifyEmail} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/signup', Signup)
router.post('/login',Login)
router.post('/logout',Logout)
router.post('/verify-email',verifyEmail)


export default router;