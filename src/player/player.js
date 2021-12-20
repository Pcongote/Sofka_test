class Player {
  constructor(name) {
    this._id = Math.floor(Math.random() * 100000).toString();
    this.name = name;
    this.score = 0;
  }

  userInfo() {
    const user = {
      _id: this._id,
      name: this.name,
      score: this.score,
    };

    return user;
  }

  updateScore(newScore) {
    this.score = newScore;
  }
}

module.exports = Player;
