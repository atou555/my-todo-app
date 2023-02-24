import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import '../styles/index.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <FontAwesomeIcon icon={faListAlt} /> Categories
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="nav-link">
              <FontAwesomeIcon icon={faListAlt} /> Tasks
            </Link>
          </li>
          <li>
            <Link to="/categories/new" className="nav-link">
              <FontAwesomeIcon icon={faPlusSquare} /> New Category
            </Link>
          </li>
          <li>
            <Link to="/tasks/new" className="nav-link">
              <FontAwesomeIcon icon={faPlusSquare} /> New Task
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
