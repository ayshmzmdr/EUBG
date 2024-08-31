class Card {
    constructor(name, imagePath, soldier, total) {
        this.name = name;
        this.imagePath = imagePath;
        this.soldier = soldier
        this.total = total
        this.remaining = total
    }

    draw() {
        card = document.createElement("button");
        card.disabled;
        card.id = `card${i}`;
        card.classList.add("card");
        document.body.prepend(card[i]);
    }

    deploy() {

    }
}

export default Card;