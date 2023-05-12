import { useEffect } from 'react';
import useCardsContext from './hooks/useCardsContext';

import CardCreate from './components/CardCreate';
import CardsList from './components/CardsList';

function App() {
  const { fetchCards } = useCardsContext();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <div className="">
      <CardCreate />
      <CardsList />
    </div>
  );
}

export default App;
