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
        this.createSoldier()
    }

    createSoldier() {
        let soldierDiv = document.createElement('div');
        soldierDiv.id = this.id;
        soldierDiv.style.width = '50px';
        soldierDiv.style.height = '50px';
        soldierDiv.style.backgroundColor = 'blue'; 
        soldierDiv.style.position = 'absolute'; 
        document.body.appendChild(soldierDiv);
    }

    draw() {
        let soldierDiv = document.getElementById(this.id);
        soldierDiv.style.left = `${this.posx}px`; 
        soldierDiv.style.top = `${this.posy}px`;  
    }

    updatePosition(newPosx, newPosy) {
        this.posx = newPosx;
        this.posy = newPosy;
        this.draw(); 
    }
    takeDamage() {}

    animateMove() {}

    display() {}

    animateDamage() {}
}

export default Soldier;