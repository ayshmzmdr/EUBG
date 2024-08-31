import Soldier from "../src/Soldiers/Soldier.js"

window.onload = () => {
    const s1 = new Soldier('soldier1', 100, 100); 
    s1.draw(); 
    
    setInterval(() => {
        s1.updatePosition(Math.floor(Math.random() * (400 - 100 + 1)) + 100, Math.floor(Math.random() * (400 - 100 + 1)) + 100); 
    }, 1000);
};