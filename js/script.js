// board layout for the tic-tac-toe
let board = [
    ['','',''],
    ['','',''],
    ['','',''],
];

// players object to hold player1, and player2 
let players = {
    'p1': 'black',
    'p2': 'yellow',
    'turn': true //true if p1, false if p2.
};



let getRowCol = (boxID) => {
    //return the row and column location of interest based on value of boxID string
    //box id is of form rRcC, where R and C are from ID of HTML
    let boxRow = parseInt(boxID[1])-1;
    let boxCol = parseInt(boxID[3])-1;
    
    return [boxRow, boxCol];
}
let mouseoverFunction = (x) => {
    //handle behaviour or cell when onmouseover event is triggered
    let boxLoc = getRowCol(x.id);
    if ( board[boxLoc[0]][boxLoc[1]] === '' ){
        x.style.backgroundColor = 'white';
    }
    
    // console.log(x);
}

function mouseoutFunction(x) {
    // handle behaviour of cell when onmouseout event is triggered
    let boxLoc = getRowCol(x.id);
    if ( board[boxLoc[0]][boxLoc[1]] === '' ) {
        x.style.backgroundColor = 'blueviolet';
    }
    // x.style.borderRadius = '50%';
    // console.log(x);
}
function changeTurn(info) {
    // handles change of turn behaviour after a players' turn
    document.getElementById(info.nextPlayer).style.backgroundColor = info.nextPlayer;
    document.getElementById(info.played).style.backgroundColor = 'blueviolet';
}

let boxDblClick = (x) => {
    // handles onclick event for each cell on the board
    let boxLoc = getRowCol(x.id);//get row and col clicked
    if ( board[boxLoc[0]][boxLoc[1]] === '' ) {//only trigger clicks on cells that are empty
        played = '';
        if(players.turn){//if true, player1 has played its turn
            
            // alert('It is your turn Yellow');
            turnInfo = {
                            nextPlayer: players.p2,
                            played: players.p1
                        };


        }
        else {//handle player2's turn
            
            // alert('It is your turn Black');
            turnInfo = {
                            nextPlayer: players.p1,
                            played: players.p2
                        };

        }


        players.turn = !(players.turn);//switch player after each turn
        
        x.style.backgroundColor = turnInfo.played;
        board[boxLoc[0]][boxLoc[1]] = turnInfo.played;


        changeTurn(turnInfo);//highlight which player's turn it is
    }
    // console.log(board);
}