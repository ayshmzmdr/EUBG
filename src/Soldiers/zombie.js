import Soldier from "./soldier.js";

class Zombie extends Soldier{
  constructor(id, posx, posy) {
    super(id,posx,posy);
    this.position = 0;
    this.range = 1;
    this.speed = 8;
    this.priority = 1;
    this.attack = 7.0;
    this.hitpoints = 18.0;
    this.attack_cooldown = 0.5;
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

export default Zombie;
