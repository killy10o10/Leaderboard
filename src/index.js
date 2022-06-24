import './styles/main.scss';
import {
  addScore, fetchScore, generateTemplate, scoreList,
} from './modules/structure.js';

const loadScores = async () => {
  await fetchScore();
  scoreList.forEach(generateTemplate);
};

loadScores();

const form = document.querySelector('#add-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#user-name');
  const scoreInput = document.querySelector('#user-score');
  addScore(nameInput.value, scoreInput.value);
  form.reset();
});

document.querySelector('#refresh').addEventListener('click', () => {
  const listContainer = document.querySelector('.score-list');
  listContainer.innerHTML = '';
  loadScores();
});