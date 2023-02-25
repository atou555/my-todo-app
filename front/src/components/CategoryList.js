import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../utils/api';

function CategoryList({ categories, handleDeleteCategory, setCategories }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, [setCategories]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
