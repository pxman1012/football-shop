import { useState } from 'react';

export default function ProductForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || '');
  const [price, setPrice] = useState(initialData.price || 0);
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
