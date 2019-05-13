const script = require('../js/script');
// const resetBoard = script.resetBoard;

// console.log(script.resetBoard());

test("Reset board should return [['','',''],['','',''],['','','']]", () => {
    expect(script.resetBoard()).toEqual([['','',''],['','',''],['','','']]);
});

test("string argument of rxcy should return [x,y]", () => {
    expect(script.getRowCol('r1c1')).toEqual([0,0]);
    expect(script.getRowCol('r2c3')).toEqual([1,2]);
    expect(script.getRowCol('r3c3')).toEqual([2,2]);
});

test("Should return name of winner for horizontal win", () => {
    let board = script.resetBoard();
    let players = script.players;
    //make p1 winner
    board[0] = [players.p1,players.p1,players.p1];
    
    //should return p1 as winner
    expect(script.checkHorizontalWin(board,players)).toEqual(players.p1);
    
    //should not return p2 as winner
    expect(script.checkHorizontalWin(board,players)).not.toEqual(players.p2);

    //make p2 winner
    board[0] = [players.p2,players.p2,players.p2];
    //should return p2 as winner
    expect(script.checkHorizontalWin(board,players)).toEqual(players.p2);
    
    //should not return p1 as winner
    expect(script.checkHorizontalWin(board,players)).not.toEqual(players.p1);
});

test("Should return null for no horizontal win", () => {
    let board = script.resetBoard();
    let players = script.players;
    expect(script.checkHorizontalWin(board,players)).toBeNull()
});

// test("Should return name of winner for vertical win")
// test("Should return null for no vertical win")

// test("Should be null no winner has occured")
// test("Should return name of winner")




test("Should return name of winner for left diagonal win", () => {
    let board = script.resetBoard();
    let players = script.players;
    //make p1 winner
    board[0][0] = players.p1;
    expect(script.checkDiagonalWin(board,players)).toBeNull();
    board[1][1] = players.p1;
    expect(script.checkDiagonalWin(board,players)).toBeNull()
    board[2][2] = players.p1;
    //should return p1 as winner
    expect(script.checkDiagonalWin(board,players)).toEqual(players.p1);
    
    //should not return p2 as winner
    expect(script.checkDiagonalWin(board,players)).not.toEqual(players.p2);


    board = script.resetBoard();
    //make p2 winner
    board[0][0] = players.p2;
    expect(script.checkDiagonalWin(board,players)).toBeNull();
    board[1][1] = players.p2;
    expect(script.checkDiagonalWin(board,players)).toBeNull()
    board[2][2] = players.p2;

    //should return p2 as winner
    expect(script.checkDiagonalWin(board,players)).toEqual(players.p2);
    
    //should not return p1 as winner
    expect(script.checkDiagonalWin(board,players)).not.toEqual(players.p1);
});
test("Should return name of winner for right diagonal win", () => {
    let board = script.resetBoard();
    let players = script.players;
    //make p1 winner
    board[0][2] = players.p1;
    expect(script.checkDiagonalWin(board,players)).toBeNull();
    board[1][1] = players.p1;
    expect(script.checkDiagonalWin(board,players)).toBeNull()
    board[2][0] = players.p1;
    //should return p1 as winner
    expect(script.checkDiagonalWin(board,players)).toEqual(players.p1);
    
    //should not return p2 as winner
    expect(script.checkHorizontalWin(board,players)).not.toEqual(players.p2);


    board = script.resetBoard();
    //make p2 winner
    board[0][2] = players.p2;
    expect(script.checkDiagonalWin(board,players)).toBeNull();
    board[1][1] = players.p2;
    expect(script.checkDiagonalWin(board,players)).toBeNull()
    board[2][0] = players.p2;

    //should return p2 as winner
    expect(script.checkDiagonalWin(board,players)).toEqual(players.p2);
    
    //should not return p1 as winner
    expect(script.checkDiagonalWin(board,players)).not.toEqual(players.p1);
});

test("Should return null for no diagonal win", () => {
    let board = script.resetBoard();
    let players = script.players;
    expect(script.checkDiagonalWin(board,players)).toBeNull()
});

test("Should return name of winner after horizontal, vertical and diagonal checks", () => {
    let board = script.resetBoard();
    let players = script.players;
    board[0][0] = players.p1;
    board[1][1] = players.p1;
    board[2][2] = players.p1;
    expect(script.checkWinner(board,players)).toEqual(players.p1);

    board = script.resetBoard();
    board[0][2] = players.p2;
    board[1][1] = players.p2;
    board[2][0] = players.p2;
    // console.log(script.checkWinner(board,players));
    expect(script.checkWinner(board,players)).toEqual(players.p2);
});

test("Expects a no win situation because no more play available", () => {
    let board = script.resetBoard();
    expect(script.checkNoWin(board)).toBe(false);
    let players = script.players;
    board[0] = [players.p1,players.p2,players.p1];
    expect(script.checkNoWin(board)).toBe(false);
    board[1] = [players.p2,players.p2,players.p1];
    expect(script.checkNoWin(board)).toBe(false);
    board[2] = [players.p1,players.p1,players.p2];

    expect(script.checkNoWin(board)).toBe(true);
})