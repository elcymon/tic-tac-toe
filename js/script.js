
// players object to hold player1, and player2 
let players = {
    'p1': 'black',
    'p2': 'yellow',
    'turn': true //true if p1, false if p2.
};

// board layout for the tic-tac-toe
let board = null;

let emptyBoardDOM = null;


let initializeGame = () => {
    emptyBoardDOM = document.getElementById('board').cloneNode(true);
    board = resetBoard();

}

let resetBoard = () => {
    return [
        ['','',''],
        ['','',''],
        ['','',''],
    ];
}

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
    document.getElementById(info.nextPlayer).style.backgroundColor = 'green';
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

        //check if there is a winner
        let winCheck =  checkWinner();
        if( winCheck !== null)
        {
            console.log('Winner is ' + winCheck);
            //alert('Winner is ' + winCheck + '. Press OK to restart');
            board = resetBoard();
            document.getElementById('board').innerHTML = emptyBoardDOM.innerHTML;
        }
        changeTurn(turnInfo);//highlight which player's turn it is
    }
    // console.log(board);
}

let checkWinner = () => {
    //function performs all checks to search for a winner
    let winner = null;
    

    //perform horizontal check
    winner = checkHorizontalWin();
    if(winner === null) {//if no horizontal win, do vertical check
        //perform vertical check
        winner = checkVerticalWin();

        if(winner === null) {//if no vertical win, do diagonal check
            //perform diagonal check
        
        }
    }

    
    
    //return result
    return winner;
}

let checkHorizontalWin = () => {
    //function checks for win on each row of the board and returns winning color
    // else it returns null if no win occurs.
    let win = null;
    for (var index = 0; index < board.length; index++) {
        //console.log(index,row.join(''));
        let row = board[index];

        if (players.p1+players.p1+players.p1 === row.join('')) {
            win = players.p1;
            break;
        }
        else if (players.p2 + players.p2 + players.p2 === row.join('')) {
            win = players.p2;
            break;
        }

    }

    return win;//no player has won
}

let checkVerticalWin = () => {
    /* check for win on each column of the board and returns winning color
        else return null if no win occurs.
    */
    let win = null;
    let nCols = board[0].length;//number of columns
    for (var c = 0; c < nCols; c++){
        //loop through columns
        let col = '';
        for (var r = 0; r < board.length; r++) {
            //loop through the rows
            col = col + board[r][c];
    
        }
        if (players.p1+players.p1+players.p1 === col) {
            win = players.p1;
            break;
        }
        else if (players.p2 + players.p2 + players.p2 === col) {
            win = players.p2;
            break;
        }

    }

    return win;
    
}