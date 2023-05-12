import { useState } from 'react';
import useCardsContext from '../hooks/useCardsContext';
import CardEdit from './CardEdit';

function CardShow({ card }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteCardById } = useCardsContext();

  const handleDeleteClick = () => {
    deleteCardById(card.id);
  };

  const handleShowEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{card.title}</h3>;
  if (showEdit) {
    content = <CardEdit onSubmit={handleSubmit} card={card} />;
  }

  return (
    <div>
      <img alt="photos" src={`https://picsum.photos/seed/${card.id}/300/200`} />
      <div>{content}</div>
      <div>
        <button onClick={handleShowEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>X</button>
      </div>
    </div>
  );
}

export default CardShow;
