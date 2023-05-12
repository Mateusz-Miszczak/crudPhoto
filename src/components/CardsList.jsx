import CardShow from './CardShow';
import useCardsContext from '../hooks/useCardsContext';

function CardsList() {
  const { cards } = useCardsContext();

  const renderCards = cards.map(card => {
    return <CardShow card={card} key={card.id} />;
  });
  return <div>{renderCards}</div>;
}

export default CardsList;
