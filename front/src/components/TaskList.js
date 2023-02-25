import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  const [filter, setFilter] = useState('all');

  const filterTasks = () => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
     <div className="task__list--header">
      <h2>Tasks</h2>
      <div>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
    {filterTasks().map((task, index) => (
      <Task
        key={task.id}
        task={task}
        index={index}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
      />
    ))
  }
    </>
   
  );
};

export default TaskList;
