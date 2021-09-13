let cells = document.querySelectorAll('.row > div');
let player = 'X'
let turnCount = 0
console.log(cells)

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);

}


function cellClicked() {
    if (event.target.textContent == '') {
        event.target.textContent = player;
        checkWin()
        if (player == 'X') {
            player = 'O'
        }
        else {
            player = 'X'
        }
        turnCount++
        console.log(turnCount)


    }

}


function checkWin() {

    if (cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') {
        alert("X WINS!")
        return
    }
    else if (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') {
        alert("X WINS!")
        return
    }

    else if (cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[0].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O') {
        alert("O WINS!")
        return
    }
    else if (turnCount == 9) {
        alert("IT'S A TIE!")
    }


}
