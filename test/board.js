const boxID = [];

for (let i = 0; i < 9; i++) {
  boxID[i] = document.createElement("button");
  boxID[i].disabled;
  boxID[i].id = `box${i}`;
  boxID[i].classList.add("box");
  document.body.prepend(boxID[i]);
}
boxID[4].classList.add("middleBox");

const cardName = ["giant", "archer", "zombie"];
const card = [];

const pl1 = document.createElement("button");
pl1.classList.add("pl1");
document.body.prepend(pl1);

for (let i = 0; i < cardName.length; i++) {
  card[i] = document.createElement("button");
  card[i].style.backgroundImage=`url(../assets/images/${cardName[i]}.png)`;
  card[i].id = `card${i}`;
  card[i].classList.add("card");
  document.body.prepend(card[i]);
}

const pl2 = document.createElement("button");
pl2.classList.add("pl2");
document.body.prepend(pl2);
