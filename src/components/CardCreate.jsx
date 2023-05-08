import { useState } from 'react';
import useCardsContext from '../hooks/useCardsContext';

function CardCreate() {
  const [title, setTitle] = useState('');
  const { createCard } = useCardsContext();

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    createCard(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Add the title and create new card that u can edit!</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Add card</button>
      </form>
    </div>
  );
}

export default CardCreate;
