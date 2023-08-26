import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();
 
router.get('/users', userController.getUsers);
router.post('/files', userController.importUsersFromFile);
 
export default router;