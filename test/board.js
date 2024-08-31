const boxID=[];

for(let i=0;i<9;i++){
    boxID[i]=document.createElement("button");
    boxID[i].id=`box${i}`;
    boxID[i].classList.add("box");
    document.body.prepend(boxID[i]);
}

const cardName=["Giant","Archer","Zombie"]
const card=[];

for(let i=0;i<cardName.length;i++){
    card[i]=document.createElement("button");
    card[i].id=`card${i}`;
    card[i].classList.add("card");
    document.body.prepend(card[i]);
}
