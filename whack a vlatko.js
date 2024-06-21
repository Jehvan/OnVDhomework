let currMoleTile = null;
let currPlantTile = null;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
};

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    let br = Math.floor(Math.random() * 9);
    return br.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
        currMoleTile.removeAttribute("clicked");
    }

    let mole = document.createElement("img");
    mole.src = "images/vlatko.png";

    let br = getRandomTile();
    while (currPlantTile && currPlantTile.id == br) {
        br = getRandomTile();
    }
    currMoleTile = document.getElementById(br);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "images/ass._stefan_andonov_20673.png";
    let br = getRandomTile();
    while (currMoleTile && currMoleTile.id == br) {
        br = getRandomTile();
    }
    currPlantTile = document.getElementById(br);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile && this.hasAttribute("clicked")) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        currMoleTile.setAttribute("clicked", true);
    } else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
