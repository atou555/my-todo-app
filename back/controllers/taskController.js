const taskController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.getAll();
      res.status(200).json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while getting the tasks.' });
    }
  },

  getTaskById: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.getById(id);
      if (!task) {
        res.status(404).json({ message: 'Task not found.' });
      } else {
        res.status(200).json(task);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while getting the task.' });
    }
  },

  createTask: async (req, res) => {
    try {
      const { name, description, dueDate, priority, category } = req.body;
      const categoryId = category ? category : Category.getDefaultId();
      const task = await Task.create(name, description, dueDate, priority, categoryId);
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while creating the task.' });
    }
  },

  updateTaskById: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, dueDate, priority, category } = req.body;
      const categoryId = category ? category : Category.getDefaultId();
      const task = await Task.update(id, name, description, dueDate, priority, categoryId);

      if (!task) {
        res.status(404).json({ message: 'Task not found.' });
      } else {
        res.status(200).json(task);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while updating the task.' });
    }
  },

  deleteTaskById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await Task.delete(id);

      if (!deletedTask) {
        res.status(404).json({ message: 'Task not found.' });
      } else {
        res.status(200).json(deletedTask);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while deleting the task.' });
    }
  }
};

export default taskController;
