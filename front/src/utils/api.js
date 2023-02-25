const API_URL = process.env.REACT_APP_API_URL;

export const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return await response.json();
};

export const addTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};

export const deleteTask = async (taskId) => {
  await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  return await response.json();
};

export const addCategory = async (category) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  });
  return await response.json();
};

export const deleteCategory = async (categoryId) => {
  await fetch(`${API_URL}/categories/${categoryId}`, {
    method: 'DELETE',
  });
};

export const toggleTask = async (taskId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}/toggle`);
  return await response.json();
};