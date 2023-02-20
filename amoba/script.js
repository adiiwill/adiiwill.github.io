let winningMoves = [
    [
        "w", "w", "w",
        "", "", "",
        "", "", ""
    ],
    [
        "", "", "",
        "w", "w", "w",
        "", "", ""
    ],
    [
        "", "", "",
        "", "", "",
        "w", "w", "w"
    ],
    [
        "w", "", "",
        "w", "", "",
        "w", "", ""
    ],
    [
        "", "w", "",
        "", "w", "",
        "", "w", ""
    ],
    [
        "", "", "w",
        "", "", "w",
        "", "", "w"
    ],
    [
        "w", "", "",
        "", "w", "",
        "", "", "w"
    ],
    [
        "", "", "w",
        "", "w", "",
        "w", "", ""
    ],
]

let currentPlayer = "o"
let canMove = true

let theTable = [
    "", "", "",
    "", "", "",
    "", "", ""
]

let xMoves = [
    "", "", "",
    "", "", "",
    "", "", ""
]

let oMoves = [
    "", "", "",
    "", "", "",
    "", "", ""
]

function isValidMove(index) {
    if (theTable[index] == "") return true
    else return false
}

function checkWin() {
    let isWin = true
    if (currentPlayer == "x") {
        console.log("X Player checkWin executed.")
        for (let i = 0; i < winningMoves.length; i++) {
            isWin = true
            for (let j = 0; j < 9; j++) {
                if (winningMoves[i][j] != "") {
                    if (winningMoves[i][j] != xMoves[j]) {
                        isWin = false
                    }
                }
            }
            if (isWin) break
        }
        console.log("isWin: " + isWin)
        
        if (isWin) alert("Blue won!")
    }
    else {
        console.log("O Player checkWin executed.")
        for (let i = 0; i < winningMoves.length; i++) {
            isWin = true
            for (let j = 0; j < 9; j++) {
                if (winningMoves[i][j] != "") {
                    if (winningMoves[i][j] != oMoves[j]) {
                        isWin = false
                    }
                }
            }
            if (isWin) break
        }
        console.log("isWin: " + isWin)

        if (isWin) alert("Red won!")
    }

    if (isWin) canMove = false
}

function turn(index) {
    if (isValidMove(index) && canMove) {
        theTable[index] = currentPlayer
        
        if (currentPlayer == "x") {
            xMoves[index] = "w"
            checkWin()
            currentPlayer = "o"
        }
        else {
            oMoves[index] = "w"
            checkWin()
            currentPlayer = "x"
        }

        colorChange(index)
    }
}

function colorChange(id) {
    if (currentPlayer == "x") {
        document.getElementById(id).style.backgroundColor = "#EA574E"
        document.getElementById(id).style.borderColor = "#EA574E"
    }
    else {
        document.getElementById(id).style.backgroundColor = "#4EE1EA"
        document.getElementById(id).style.borderColor = "#4EE1EA"
    }
}

function restart() {
    location.reload()
}