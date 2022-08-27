//chessboard pattern creation
let chessBoard = document.getElementById('chessboard')
for(let i = 1; i < 9; i++) {
    let rows = document.createElement('div')
    rows.classList.add('rows')
    for(let j = 1; j < 9; j++){
        let checkers = document.createElement('div')
        checkers.classList.add('checkers')
        if(j%2 === 0){
            checkers.style.background = 'linear-gradient(dark red, red, darkred)'
        }
        else{
            checkers.style.background = 'linear-gradient(gainsboro, silver, gainsboro)'
        }
        rows.appendChild(checkers)
    }
    chessBoard.appendChild(rows)
}
