import { useState } from 'react';
import { addTask } from '../utils/api';

const AddTaskForm = ({ categories, setTasks, handleAddTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    category_id: categories[0].id,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task).then((newTask) => {
      handleAddTask(newTask);
      setTask({
        title: '',
        description: '',
        category_id: categories[0].id,
      });
    });
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2>Ajouter une tâche</h2>
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={(event) =>
            setTask({ ...task, title: event.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={(event) =>
            setTask({ ...task, description: event.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category_id">Catégorie</label>
        <select
          id="category_id"
          name="category_id"
          value={task.category_id}
          onChange={(event) =>
            setTask({ ...task, category_id: parseInt(event.target.value) })
          }
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTaskForm;
