import React, { useState, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { getTasksByCategoryId } from '../api/task';
import { updateCategory } from '../api/category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function CategoryList({ category, index, onDeleteCategory, onEditCategory }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasksByCategoryId(category._id);
      setTasks(tasks);
    }
    fetchTasks();
  }, [category._id]);

  const handleDeleteCategory = async () => {
    await onDeleteCategory(category._id);
  };

  const handleEditCategory = async () => {
    const newName = prompt('Enter the new category name');
    if (newName) {
      const updatedCategory = { ...category, name: newName };
      await updateCategory(updatedCategory);
      onEditCategory(updatedCategory);
    }
  };

  return (
    <Draggable draggableId={category._id} index={index}>
      {(provided) => (
        <div
          className="category"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="category-header" {...provided.dragHandleProps}>
            {category.name}
            <div className="category-header-icons">
              <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditCategory} />
              <FontAwesomeIcon icon={faTrash} onClick={handleDeleteCategory} />
            </div>
          </div>
          <Droppable droppableId={category._id} type="task">
            {(provided) => (
              <div
                className="task-list-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <TaskList tasks={tasks} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddTaskForm categoryId={category._id} />
        </div>
      )}
    </Draggable>
  );
}

export default CategoryList;
