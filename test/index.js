import Giant from "../src/soldiers/giant.js"

window.onload = () => {
    const s1 = new Giant('soldier1', 100, 100); 
    s1.draw(); 
    
    setInterval(() => {
        s1.updatePosition(Math.floor(Math.random() * (400 - 100 + 1)) + 100, Math.floor(Math.random() * (400 - 100 + 1)) + 100); 
    }, 1000);
};