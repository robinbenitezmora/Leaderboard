const game = async () => {
  let gameId = [];
  const gameIdResult = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'First Game',
    }),
  });
  const gameIdJson = await gameIdResult.json();
  gameId = (gameIdJson.result).split(' ');
  return gameId;
};

module.exports = game;
