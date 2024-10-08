import Soldier from "./soldier.js";

class Giant extends Soldier {
  constructor(id, posx, posy) {
    super(id, posx, posy);
    this.position = 0;
    this.range = 1;
    this.speed = 2;
    this.priority = 2;
    this.attack = 8.0;
    this.hitpoints = 25.0;
    this.attack_cooldown = 1.0;
    this.alive = true;
    this.moving = false;
    this.friendly = false;
    this.createSoldier();
  }

  createSoldier() {
    let soldierDiv = document.createElement("div");
    soldierDiv.id = this.id;
    soldierDiv.classList.add("soldierDiv");
    document.body.appendChild(soldierDiv);
  }

  /*animateDamage() {
     CSS change to animate: modify colour or embhasize on damage 
  }*/
}

export default Giant;
