import Soldier from "./soldier.js";

class Archer extends Soldier{
  constructor(id, posx, posy) {
    super(id,posx,posy);
    this.position = 0;
    this.range = 3;
    this.speed = 5;
    this.priority = 0;
    this.attack = 5.0;
    this.hitpoints = 15.0;
    this.attack_cooldown = 0.75;
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

export default Archer;
