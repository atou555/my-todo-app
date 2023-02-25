import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index, onDeleteTask, onToggleTask }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <span>{task.title}</span>
          <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
