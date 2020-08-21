const { getCards } = require('../../utils/eventStoreDB');

exports.getValidCards = async () => {
  const { data } = await getCards();

  const validCards = [];

  for (const event of data.entries) {
    const eventType = event.eventType;
    const cardData = JSON.parse(event.data);

    if (eventType === 'AddedCard') {
      validCards.push(cardData);
    }
  }

  for (const event of data.entries) {
    const eventType = event.eventType;
    const cardData = JSON.parse(event.data);

    if (eventType === 'RemovedCard') {
      const cardIndex = validCards.findIndex(
        (card) => card.providerCardId === cardData.providerCardId
      );
      if (cardIndex >= 0) {
        validCards.splice(cardIndex, 1);
      }
    }
  }

  return validCards;
};
