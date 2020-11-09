const cell1 = document.querySelector("#cell1");
const cell2 = document.querySelector("#cell2");
const cell3 = document.querySelector("#cell3");
const cell4 = document.querySelector("#cell4");
const cell5 = document.querySelector("#cell5");
const cell6 = document.querySelector("#cell6");
const cell7 = document.querySelector("#cell7");
const cell8 = document.querySelector("#cell8");
const cell9 = document.querySelector("#cell9");

//This should run when an empty cell is clicked
const cellClick = function(cell) {
    //If player is even, write "x"
    if (player % 2 === 0) {
        cell.textContent = "x";
    //If it is odd, write "o"
    } else {
        cell.textContent = "o";
    }

    //The cell clicked should no longer be clickable
    cell.removeEventListener("click", cellClick);

    //Switch players
    player++;
}

//This starts a new game
const play = function() {
    //Create a player variable that tracks which player's turn it is
    player = 0;

    //Create an event listener for each column
    //Call cellClick and pass the cell argument
    cell1.addEventListener("click", () => {
        cellClick(cell1);
    });

    cell2.addEventListener("click", () => {
        cellClick(cell2);
    });

    cell3.addEventListener("click", () => {
        cellClick(cell3);
    });

    cell4.addEventListener("click", () => {
        cellClick(cell4);
    });

    cell5.addEventListener("click", () => {
        cellClick(cell5);
    });

    cell6.addEventListener("click", () => {
        cellClick(cell6);
    });

    cell7.addEventListener("click", () => {
        cellClick(cell7);
    });

    cell8.addEventListener("click", () => {
        cellClick(cell8);
    });

    cell9.addEventListener("click", () => {
        cellClick(cell9);
    });
}

play();
