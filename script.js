const boxes = document.querySelectorAll(".box")
boxes.forEach(box => box.addEventListener('click', activateBox))
let boxVector = [[boxes.item(0), 0],
                 [boxes.item(1), 0],
                 [boxes.item(2), 0],
                 [boxes.item(3), 0],
                 [boxes.item(4), 0],
                 [boxes.item(5), 0],
                 [boxes.item(6), 0],
                 [boxes.item(7), 0],
                 [boxes.item(8), 0]]

function activateBox(){

    if(boxVector[this.id][1] == 0){ boxes.item(this.id).setAttribute('style', 'background-color: blue;')
                                    boxVector[this.id][1] = 1;
                                    enemyTurn()
                                }
    winCheck()
}

function winCheck(){
    if(bruteforcewin(1) == 1){ document.getElementById('winlabel').setAttribute('style', 'color: blue; visibility: visible;'); lock()}
    else if(bruteforcewin(2) == 1){ document.getElementById('winlabel').setAttribute('style', 'color: red; visibility: visible;'); lock()}
}

function bruteforcewin(player){
    if(boxVector[0][1] == player && boxVector[3][1] == player && boxVector[6][1] == player) return 1;
    else if(boxVector[1][1] == player && boxVector[4][1] == player && boxVector[7][1] == player) return 1;
    else if(boxVector[2][1] == player && boxVector[5][1] == player && boxVector[8][1] == player) return 1;
    else if(boxVector[0][1] == player && boxVector[1][1] == player && boxVector[2][1] == player) return 1;
    else if(boxVector[3][1] == player && boxVector[4][1] == player && boxVector[5][1] == player) return 1;
    else if(boxVector[6][1] == player && boxVector[7][1] == player && boxVector[8][1] == player) return 1;
    else if(boxVector[0][1] == player && boxVector[4][1] == player && boxVector[8][1] == player) return 1;
    else if(boxVector[2][1] == player && boxVector[4][1] == player && boxVector[6][1] == player) return 1;
    else return 0;
}

function lock(){
    for(let i = 0; i < 9; i++){
        boxVector[i][1] = 3
    }
}

function generate_random(){
    return Math.floor(Math.random() * 8)
}
function enemyTurn(){
    let ct = 0
    for(let i = 0; i < 9; i++){
        if(boxVector[i][1] != 0) ct++
        if(ct == 9) return
    }
    let id
    do{
        id = generate_random()
    }while(boxVector[id][1] != 0);
    setTimeout(() => boxes.item(id).setAttribute('style', 'background-color: red;'), 100)
    boxVector[id][1] = 2
}