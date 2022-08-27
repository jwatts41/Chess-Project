//chessboard pattern creation
let chessBoard = document.getElementById('chessboard')
for(let i = 1; i < 9; i++) {
    let rows = document.createElement('div')
    rows.classList.add('rows')
    for(let j = 1; j < 9; j++){
        let checkers = document.createElement('div')
    }
    chessBoard.appendChild(rows)
}
