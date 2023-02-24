import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCategory } from '../api';
import { getUser } from '../user';

function AddCategoryForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(event) {
    setName(event.target.value);
    setError(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = getUser();
    addCategory(user._id, name)
      .then(() => {
        navigate('/categories');
      })
      .catch(error => {
        setError(error.message);
      });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Add Category</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryForm;
