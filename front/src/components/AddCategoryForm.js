import { useState } from 'react';

const AddCategoryForm = ({ handleAddCategory }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCategory({ name });
    setName('');
  };

  return (
    <form className="add-category-form" onSubmit={handleSubmit}>
      <h2>Ajouter une catégorie</h2>
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddCategoryForm;
