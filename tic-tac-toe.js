//Array with all of the cells
const cells = Array.from(document.querySelectorAll("div"));

//Array with all of the sections
const sections = Array.from(document.querySelectorAll("section"));

//Array with all of the top cells
let topSide = [];
for (let cell of sections[0].children) {
    topSide.push(cell);
}

//Array with all of the left cells
let leftSide = [];
for (let section of sections) {
    leftSide.push(section.querySelector("div"));
}

//This checks if the game is over
const checkEnd = function() {
    let gameOver = false;

    //Check for any vertical wins
    for (let cell of topSide) {
        if (cell.textContent !== "") {
            if (cell.textContent === cells[cells.indexOf(cell) + topSide.length].textContent &&
            cell.textContent === cells[cells.indexOf(cell) + (topSide.length * 2)].textContent) {
                console.log("vertical");
            }
        }
    }

    //Check for any horizontal wins
    for (let cell of leftSide) {
        if (cell.textContent !== "") {
            if (cell.textContent === cells[cells.indexOf(cell) + 1].textContent &&
            cell.textContent === cells[cells.indexOf(cell) + 2].textContent) {
                console.log("horizontal");
            }
        }
    }

    //Check for diagonal win
    const topCell = topSide[topSide.length - 1]
    if (topCell.textContent !== "") {
        if (topCell.textContent === cells[cells.indexOf(topCell) + (topSide.length - 1)].textContent &&
        topCell.textContent === cells[cells.indexOf(topCell) + ((topSide.length - 1) * 2)].textContent) {
            console.log("diagonal left");
        }
    }

    //Check for other diagonal win
    const leftCell = leftSide[0];
    if (leftCell.textContent !== "") {
        if (leftCell.textContent === cells[cells.indexOf(leftCell) + (leftSide.length + 1)].textContent &&
        leftCell.textContent === cells[cells.indexOf(leftCell) + ((leftSide.length + 1) * 2)].textContent) {
            console.log("diagonal right");
        }
    }    
}

//This should run when an empty cell is clicked
const cellClick = function(cell) {
    //If player is even, write "x"
    if (player % 2 === 0) {
        cell.textContent = "x";
    //If it is odd, write "o"
    } else {
        cell.textContent = "o";
    }

    checkEnd();

    //Switch players
    player++;
}

//This starts a new game
const play = function() {
    //Create a player variable that tracks which player's turn it is
    player = 0;

    //Create an event listener for each column
    //Removes listeners once called
    //Call cellClick and pass the cell argument
    cells[0].addEventListener("click", cell1Clicked = () => {
        cells[0].removeEventListener("click", cell1Clicked);
        cellClick(cells[0]);
    });

    cells[1].addEventListener("click", cell2Clicked =() => {
        cells[1].removeEventListener("click", cell2Clicked);
        cellClick(cells[1]);
    });

    cells[2].addEventListener("click", cell3Clicked =() => {
        cells[2].removeEventListener("click", cell3Clicked);
        cellClick(cells[2]);
    });

    cells[3].addEventListener("click", cell4Clicked =() => {
        cells[3].removeEventListener("click", cell4Clicked);
        cellClick(cells[3]);
    });

    cells[4].addEventListener("click", cell5Clicked =() => {
        cells[4].removeEventListener("click", cell5Clicked);
        cellClick(cells[4]);
    });

    cells[5].addEventListener("click", cell6Clicked =() => {
        cells[5].removeEventListener("click", cell6Clicked);
        cellClick(cells[5]);
    });

    cells[6].addEventListener("click", cell7Clicked =() => {
        cells[6].removeEventListener("click", cell7Clicked);
        cellClick(cells[6]);
    });

    cells[7].addEventListener("click", cell8Clicked =() => {
        cells[7].removeEventListener("click", cell8Clicked);
        cellClick(cells[7]);
    });

    cells[8].addEventListener("click", cell9Clicked =() => {
        cells[8].removeEventListener("click", cell9Clicked);
        cellClick(cells[8]);
    });
}

play();
