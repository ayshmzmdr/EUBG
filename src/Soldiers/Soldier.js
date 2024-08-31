class Soldier {
    constructor(id, posx, posy) {
        this.id = id
        this.posx = posx
        this.posy = posy
        this.position = 0
        this.range = 0
        this.speed = 0
        this.priority = 0
        this.attack = 0.0
        this.hitpoints = 0.0
        this.attack_cooldown = 0.0
        this.alive = false
        this.moving = false
        this.friendly = false
        this.createSoldier()
    }

    createSoldier() {
        let soldierDiv = document.createElement('div');
        soldierDiv.id = this.id;
        /* Replace this with css class */
        soldierDiv.style.width = '50px';
        soldierDiv.style.height = '50px';
        soldierDiv.style.backgroundColor = 'blue'; 
        soldierDiv.style.position = 'absolute'; 
        /* Replace this with css class */
        document.body.appendChild(soldierDiv);
    }

    draw() {
        let soldierDiv = document.getElementById(this.id);
        if (this.alive == true) {
            soldierDiv.style.left = `${this.posx}px`; 
            soldierDiv.style.top = `${this.posy}px`; 
        } else {
            /* CSS to make the div invisible */
        }
    }

    updatePosition(newPosx, newPosy) {
        this.posx = newPosx;
        this.posy = newPosy;
        this.draw();  // Replace with animateMove() once implemented
    }
    takeDamage(damage) {
        this.hitpoints = this.hitpoints - damage
        if (this.hitpoints <= 0) {
            this.alive = false
        }
    }

    animateMove(newPosX, newPosY) {
        /* Add CSS animation to move it from (posx, posy) to (newPosX, newPosY) */
    }

    animateDamage() {
        /* CSS change to animate: modify colour or embhasize on damage */
    }
}

export default Soldier;