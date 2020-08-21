const request = require('axios');
const { v4: uuidv4 } = require('uuid');

const baseURL = 'http://127.0.0.1:2113/streams';

exports.sendAddedCardEvent = async (card) => {
  const url = `${baseURL}/card-processor`;

  return request(url, {
    method: 'POST',
    auth: {
      username: 'admin',
      password: 'changeit',
    },
    headers: {
      'Content-Type': 'application/json',
      'ES-EventType': 'AddedCard',
      'ES-EventId': uuidv4(),
    },
    data: card,
  });
};

exports.sendRemoveCardEvent = async (card) => {
  const url = `${baseURL}/card-processor`;

  return request(url, {
    method: 'POST',
    auth: {
      username: 'admin',
      password: 'changeit',
    },
    headers: {
      'Content-Type': 'application/json',
      'ES-EventType': 'RemovedCard',
      'ES-EventId': uuidv4(),
    },
    data: card,
  });
};

exports.getCards = async (card) => {
  const url = `${baseURL}/card-processor?embed=body`;

  return request(url, {
    method: 'GET',
    auth: {
      username: 'admin',
      password: 'changeit',
    },
    headers: {
      'Content-Type': 'application/json',
    },
    data: card,
  });
};
