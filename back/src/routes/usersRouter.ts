import express from 'express';
import userController from '../controllers/userController';
 
const router = express.Router();
 
router.get('/api/users/:q', userController.getUsers);
 
export default router;