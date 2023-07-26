const readline = require("readline");

const ROWS = 30;
const COLS = 30;
const board = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(null));
let player = 1; // 1: 흑돌, 0: 백돌
let moves = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

setTimeout(() =>{ 
    console.log('Time Out');
    rl.close();
}, 300000);

function printBoard() {
    for (let i = 0; i < ROWS; i++) {
        let boaed_str = '';
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === null) {
            boaed_str += '. ';
            } 
            else {
            boaed_str += board[i][j] ? '1 ' : '0 ';
            }
        }
    console.log(boaed_str);
    }
}

function checkWin(r, c) {
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1], [0, -1], [-1, 0], [-1, -1], [-1, 1]
    ];
  
    for (const [dx, dy] of directions) {
        let check_win = 1;
        for (let i = 1; i < 5; i++) {
            const nr = r + dx * i;
            const nc = c + dy * i;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === player) {
            check_win++;
            } 
            else {
                break;
            }
        }
  
    if (check_win >= 5) {
            return true;
        }
    }
  
    return false;
}
  
function checkGameEnd() {
    if (moves >= ROWS * COLS) {
        console.log('Game over');
        rl.close();
    }
}
  
function playTurn() {
    rl.question(`Player ${player === 1 ? '1' : '2'}의 차례, 좌표값 0~29 사이의 값을 입력해주세요 (예: 15, 15): `, (input) => {
        const [r, c] = input.split(',').map(num => parseInt(num));
        if (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === null) {
            board[r][c] = player;
            moves++;
            if (checkWin(r, c)) {
                printBoard()
                console.log(`오목 달성! Player ${player === 1 ? '1이' : '2가'} 이겼습니다!`);
                rl.close();
            } else {
                player = player === 1 ? 0 : 1;
                printBoard();
                checkGameEnd();
                playTurn();
            }
        } else if(r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] !== null) {
            console.log('이미 선택된 좌표입니다. 다시 입력해주세요.');
            playTurn();
        }
        else{
            console.log('잘못된 좌표입니다. 다시 입력해주세요.');
            playTurn();
        }
    });
}

  
  
function main() {
    console.log('오목 게임');
    printBoard();
    playTurn();
}
  
main();