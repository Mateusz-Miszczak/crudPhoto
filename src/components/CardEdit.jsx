import { useState } from 'react';
import useCardsContext from '../hooks/useCardsContext';

function CardEdit({ onSubmit, card }) {
  const [title, setTitle] = useState(card.title);
  const { editCardById } = useCardsContext();

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit();
    editCardById(card.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default CardEdit;
