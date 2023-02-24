import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

// Routes for tasks
router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTaskById);
router.delete('/tasks/:id', taskController.deleteTaskById);

export default router;
