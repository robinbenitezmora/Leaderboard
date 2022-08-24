import './index.css';
import postScore from './post.js';
import reload from './reload.js';

document.querySelector('.submit-btn').addEventListener('submit', postScore);
document.querySelector('show-scores__button').addEventListener('click', reload);
