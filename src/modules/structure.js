/* eslint-disable no-unused-vars */
const gameId = 'SGzYdY5RH5N5jim7hk5I';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SGzYdY5RH5N5jim7hk5I/scores';
// `${baseURL + gameId}/scores/`;

// Generate game ID
const createGame = async () => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Quami game',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => (json));
};

const generateTemplate = (scores) => {
  const listContainer = document.querySelector('.score-list');

  listContainer.innerHTML += `<li>${scores.user}: ${scores.score}</li>`;
};

// fetch added score from API
const fetchScore = async () => {
  await fetch(scoreURL)
    .then((response) => response.json())
    .then((json) => generateTemplate(json.result));
};

// Push score to API
const addScore = async (user, score) => {
  await fetch(scoreURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user, score,
    }),
  }).then((response) => response.json()).then((json) => {
    fetchScore();
  }).catch((error) => (error));
};

export { fetchScore, addScore };
