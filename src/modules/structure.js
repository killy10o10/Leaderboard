const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SGzYdY5RH5N5jim7hk5I/scores';

const generateTemplate = (scores) => {
  const listContainer = document.querySelector('.score-list');
  listContainer.innerHTML += `<li>${scores.userName}: ${scores.score}</li>`;
};
const scoreList = [];
// fetch added score from API
const fetchScore = async () => {
  const response = await fetch(scoreURL);
  const scores = await response.json();
  const sortedList = await scores.result.sort((a, b) => b.score - a.score);
  scoreList.length = 0;
  sortedList.forEach((item) => {
    scoreList.push(item);
  });
};

// Push score to API
const addScore = async (userName, score) => {
  await fetch(scoreURL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, score }),
  });
};

export {
  fetchScore, addScore, generateTemplate, scoreList,
};
