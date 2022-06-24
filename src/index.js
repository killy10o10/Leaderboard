import './styles/main.scss';
import { addScore, fetchScore } from './modules/structure.js';

fetchScore();

const form = document.querySelector('#add-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#user-name').value.trim();
  const scoreInput = document.querySelector('#user-score').value;
  addScore(nameInput, scoreInput);
  form.reset();
});

document.querySelector('#refresh').addEventListener('click', () => {
  fetchScore();
});