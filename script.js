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
let turn = 0

function activateBox(){

    if(turn == 0 && boxVector[this.id][1] == 0){ boxes.item(this.id).setAttribute('style', 'background-color: blue;'); boxVector[this.id][1] = 1;}
    else if (turn == 1 && boxVector[this.id][1] == 0){ boxes.item(this.id).setAttribute('style', 'background-color: red;'); boxVector[this.id][1] = 2;}

    turn = !turn
    winCheck()
}

function winCheck(){
    if(bruteforcewin(1) == 1){ document.getElementById('winlabel').setAttribute('style', 'color: blue;'); lock()}
    else if(bruteforcewin(2) == 1){ document.getElementById('winlabel').setAttribute('style', 'color: red;'); lock()}
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