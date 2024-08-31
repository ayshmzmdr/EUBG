class Card {
  constructor(name, soldier, total) {
    this.name = name;
    this.soldier = soldier;
    this.total = total;
    this.remaining = total;
  }

  draw() {
    this.drawCard();
  }

  deploy() {
    this.remaining = this.remaining - 1;
  }

  drawCard() {
    const card = document.createElement("button");
    card.disabled;
    card.id = `card${this.name}`;
    card.style.backgroundImage = `url(../assets/images/${this.name}.png)`;
    card.classList.add("card");
    document.getElementById("cardHolder")?.prepend(card);
  }
}

export default Card;
