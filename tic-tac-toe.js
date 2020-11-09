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
    cell1.addEventListener("click", cell1Clicked = () => {
        cell1.removeEventListener("click", cell1Clicked);
        cellClick(cell1);
    });

    cell2.addEventListener("click", cell2Clicked =() => {
        cell2.removeEventListener("click", cell2Clicked);
        cellClick(cell2);
    });

    cell3.addEventListener("click", cell3Clicked =() => {
        cell3.removeEventListener("click", cell3Clicked);
        cellClick(cell3);
    });

    cell4.addEventListener("click", cell4Clicked =() => {
        cell4.removeEventListener("click", cell4Clicked);
        cellClick(cell4);
    });

    cell5.addEventListener("click", cell5Clicked =() => {
        cell5.removeEventListener("click", cell5Clicked);
        cellClick(cell5);
    });

    cell6.addEventListener("click", cell6Clicked =() => {
        cell6.removeEventListener("click", cell6Clicked);
        cellClick(cell6);
    });

    cell7.addEventListener("click", cell7Clicked =() => {
        cell7.removeEventListener("click", cell7Clicked);
        cellClick(cell7);
    });

    cell8.addEventListener("click", cell8Clicked =() => {
        cell8.removeEventListener("click", cell8Clicked);
        cellClick(cell8);
    });

    cell9.addEventListener("click", cell9Clicked =() => {
        cell9.removeEventListener("click", cell9Clicked);
        cellClick(cell9);
    });
}

play();
