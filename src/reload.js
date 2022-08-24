import Showscores from './showscores.js';

const reload = () => async () => {
  const listScores = document.querySelector('.show-scores__table');
  listScores.innerHTML = '';
  const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
  const scoresJson = await scores.json();
  const scoresArray = scoresJson.scores;
  scoresArray.forEach((item) => {
    const saveScores = Showscores.showScores(item.player, item.score);
    listScores.insertAdjacentHTML('beforeend', saveScores);
  });
};

export default reload;