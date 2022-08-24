const postScore = async (item) => {
  item.preventDefault();
  const player = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dV5ddO4HfUyAH1uOfTZ3/scores/';
  const result = await fetch(`${game}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      player,
      score,
    }),
  });
  const data = await result.json();
  const theName = document.querySelector('.player');
  const theScore = document.querySelector('.score');
  theName.value = '';
  theScore.value = '';
  return data;
};

export default postScore;
