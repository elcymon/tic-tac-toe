let board = [
    ['','',''],
    ['','',''],
    ['','',''],
];

let players = {
    'p1': 'black',
    'p2': 'yellow',
    'turn': true //true if p1, false if p2.
};


let getRowCol = (boxID) => {
    let boxRow = parseInt(boxID[1])-1;
    let boxCol = parseInt(boxID[3])-1;
    
    return [boxRow, boxCol];
}
let mouseoverFunction = (x) => {
    let boxLoc = getRowCol(x.id);
    if ( board[boxLoc[0]][boxLoc[1]] === '' ){
        x.style.backgroundColor = 'white';
    }
    
    // console.log(x);
}

function mouseoutFunction(x) {
    let boxLoc = getRowCol(x.id);
    if ( board[boxLoc[0]][boxLoc[1]] === '' ) {
        x.style.backgroundColor = 'blueviolet';
    }
    // x.style.borderRadius = '50%';
    // console.log(x);
}
function changeTurn(info) {
    document.getElementById(info.nextPlayer).style.backgroundColor = info.nextPlayer;
    document.getElementById(info.played).style.backgroundColor = 'blueviolet';
}

let boxDblClick = (x) => {
    let boxLoc = getRowCol(x.id);
    if ( board[boxLoc[0]][boxLoc[1]] === '' ) {
        played = '';
        if(players.turn){
            
            // alert('It is your turn Yellow');
            turnInfo = {
                            nextPlayer: players.p2,
                            played: players.p1
                        };


        }
        else {
            
            // alert('It is your turn Black');
            turnInfo = {
                            nextPlayer: players.p1,
                            played: players.p2
                        };

        }


        players.turn = !(players.turn);
        
        x.style.backgroundColor = turnInfo.played;
        board[boxLoc[0]][boxLoc[1]] = turnInfo.played;


        changeTurn(turnInfo);
    }
    // console.log(board);
}