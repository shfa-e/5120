
var board;
var score = 0;
var rows = 4;
var col = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    // board = [
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0]
    // ]

    board = [
        [5, 5, 5, 5],
        [5, 5, 5, 5],
        [10, 10, 20, 20],
        [10, 10, 20, 20]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c <col; c++) {
            //<div></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);

            document.getElementsById("board").append(tile);
        }
    }
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; 
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 2560){
            tile.classList.add("x"+ num.toString());
        } else {
            tile.classList.add("x5120"+ num.toString());
        }
    }
}
