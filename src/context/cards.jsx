import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const CardsContext = createContext();

function Provider({ children }) {
  const [cards, setCards] = useState([]);

  const fetchCards = useCallback(async title => {
    const response = await axios.get('http://localhost:3001/cards');

    setCards(response.data);
  }, []);

  const createCard = async title => {
    const response = await axios.post('http://localhost:3001/cards', {
      title,
    });

    const updatedCards = [...cards, response.data];
    setCards(updatedCards);
  };

  const deleteCardById = async id => {
    await axios.delete(`http://localhost:3001/cards/${id}`);

    const cardsAfterDelete = cards.filter(card => {
      return card.id !== id;
    });

    setCards(cardsAfterDelete);
  };

  const editCardById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/cards/${id}`, {
      title: newTitle,
    });

    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, ...response.data };
      }

      return card;
    });

    setCards(updatedCards);
  };

  const functionsAndState = {
    cards,
    fetchCards,
    createCard,
    deleteCardById,
    editCardById,
  };

  console.log(cards);

  return (
    <CardsContext.Provider value={functionsAndState}>
      {children}
    </CardsContext.Provider>
  );
}

export { Provider };
export default CardsContext;
