import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const CardsContext = createContext();

function Provider({ children }) {
  const [cards, setCards] = useState([]);

  const fetchCards = useCallback(async title => {
    const response = await axios.get('httpL//localhost:3001/cards');

    setCards(response.data);
  }, []);

  const createCard = async title => {
    const response = await axios.post('http://localhost:3001/cards', {
      title,
    });

    const updatedCards = [...cards, response.data];
    setCards(updatedCards);
  };

  const functionsAndState = {
    fetchCards,
    createCard,
  };

  return (
    <CardsContext.Provider value={functionsAndState}>
      {children}
    </CardsContext.Provider>
  );
}

export { Provider };
export default CardsContext;
