import express from 'express';
import userController from '../controllers/userController';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

router.get('/users', userController.getUsers);
router.post('/files', upload.single('file'), userController.importUsersFromFile);

export default router;