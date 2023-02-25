import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './layouts';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import CategoryList from './components/CategoryList';
import AddCategoryForm from './components/AddCategoryForm';
import Weather from './components/Weather';
import * as api from './utils/api';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './styles/index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getTasks().then((tasks) => {
      setTasks(tasks);
    });
    api.getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  const handleAddTask = (task) => {
    api.addTask(task).then((newTask) => {
      setTasks([...tasks, newTask]);
    });
  }

  const handleDeleteTask = (taskId) => {
    api.deleteTask(taskId).then(() => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    });
  }

  const handleAddCategory = (category) => {
    api.addCategory(category).then((newCategory) => {
      setCategories([...categories, newCategory]);
    });
  }

  const handleDeleteCategory = (categoryId) => {
    api.deleteCategory(categoryId).then(() => {
      const updatedCategories = categories.filter((category) => category.id !== categoryId);
      setCategories(updatedCategories);
    });
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const movedTask = tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, movedTask[0]);
    setTasks([...tasks]);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Sidebar categories={categories} handleAddCategory={handleAddCategory} handleDeleteCategory={handleDeleteCategory} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Routes>
                <Route path="/" element={<TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} onToggleTask={api.toggleTask} />} />
                <Route path="/ajouter-tache" element={<AddTaskForm categories={categories} handleAddTask={handleAddTask} />} />
                <Route path="/categories" element={<CategoryList categories={categories}  setCategories={setCategories} handleDeleteCategory={handleDeleteCategory} />} />
                <Route path="/ajouter-categorie" element={<AddCategoryForm handleAddCategory={handleAddCategory} />} />
                <Route path="/meteo" element={<Weather />} />
              </Routes>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Router>
  );
};

export default App;
