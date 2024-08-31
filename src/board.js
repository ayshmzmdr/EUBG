class Board {
  constructor(posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.blockWidth = 100;
  }

  draw() {
    const boxID = [];

    for (let i = 0; i < 9; i++) {
      boxID[i] = document.createElement("button");
      boxID[i].id = `box${i}`;
      boxID[i].classList.add("box");
      document.body.prepend(boxID[i]);
    }
    boxID[4].classList.add("middleBox");

    const pl1 = document.createElement("button");
    pl1.classList.add("pl1");
    document.body.prepend(pl1);
    const pl2 = document.createElement("button");
    pl2.classList.add("pl2");
    document.body.prepend(pl2);
  }
}

export default Board;
