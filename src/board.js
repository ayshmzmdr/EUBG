class Board {
  constructor(posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.blockWidth = 100;
    this.boxCount = 9;
    this.midBoxIndex = this.boxCount / 2 - 1;
  }

  draw() {
    this.drawBoxHolder();
    this.drawBoxes();
    this.drawCastles();
    this.drawCardHolder();
  }

  drawBoxHolder() {
    const boxHolder = document.createElement("div");
    boxHolder.id = "boxHolder";
    boxHolder.classList.add("boxHolder");
    document.body?.prepend(boxHolder);
  }

  drawBoxes() {
    for (let boxIndex = 0; boxIndex <= this.boxCount; boxIndex++) {
      const box = document.createElement("div");
      box.id = `box${boxIndex}`;
      box.classList.add("box");
      document.getElementById("boxHolder")?.prepend(box);
    }
    document
      .getElementById(`box${this.midBoxIndex}`)
      ?.classList.add("middleBox");
  }

  drawCastles() {
    const pl1 = document.createElement("button");
    pl1.classList.add("pl1");
    document.body.prepend(pl1);

    const pl2 = document.createElement("button");
    pl2.classList.add("pl2");
    document.body.prepend(pl2);
  }

  drawCardHolder() {
    const cardHolder = document.createElement("div");
    cardHolder.id = "cardHolder";
    cardHolder.classList.add("cardHolder");
    document.body.prepend(cardHolder);
  }
}

export default Board;
