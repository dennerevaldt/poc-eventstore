const { sendAddedCardEvent } = require('../../utils/eventStoreDB');

exports.addCard = (card) => {
  return sendAddedCardEvent(card);
};
