const { sendRemoveCardEvent } = require('../../utils/eventStoreDB');

exports.removeCard = (card) => {
  return sendRemoveCardEvent(card);
};
