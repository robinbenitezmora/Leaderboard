class Showscores {
  static showScores(player, scores) {
    return `
      <div class="show-scores__table-row" data-id=${player}>
        <div class="show-scores__table-name" data-id=${player}>${player}</div>
        <div class="show-scores__table-score" data-id=${player}>${scores}</div>
      </div>`;
  }
}

export default Showscores;
