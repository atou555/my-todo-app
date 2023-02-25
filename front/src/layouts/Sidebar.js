import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import AddCategoryForm from '../components/AddCategoryForm';

const Sidebar = ({ categories, handleAddCategory, handleDeleteCategory }) => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src="/logo.png" alt="Logo" />
        <h1>My Todo App</h1>
      </Link>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              Tâches
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/ajouter-tache" className="sidebar__link">
              Ajouter une tâche
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/categories" className="sidebar__link">
              Catégories
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/ajouter-categorie" className="sidebar__link">
              Ajouter une catégorie
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/meteo" className="sidebar__link">
              Météo
            </Link>
          </li>
        </ul>
      </nav>
      <CategoryList categories={categories} handleDeleteCategory={handleDeleteCategory} />
      <AddCategoryForm handleAddCategory={handleAddCategory} />
    </div>
  );
};

export default Sidebar;
