var number = 6;
var displayRgb = document.querySelector("h1 span");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var colors = getColors(number);
var pickedColor = pick();

displayRgb.textContent = pickedColor;
hard.classList.add("selected");

reset.addEventListener("click", function () {
    colors = getColors(number);
    pickedColor = pick();
    displayRgb.textContent = pickedColor;
    reset.textContent = "New Color";
    message.textContent = "";
    h1.style.background = "#232323";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    };
});

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    number = 3;
    colors = getColors(number);
    pickedColor = pick();
    displayRgb.textContent = pickedColor;
    message.textContent = "";
    h1.style.background = "#232323";
    for (var i = 0; i < squares.length; i++) {
        if (i < 3) {
            squares[i].style.background = colors[i];
            console.log("me");
        } else {
            squares[i].style.display = "none";
        }
    };
});

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    number = 6;
    colors = getColors(number);
    pickedColor = pick();
    displayRgb.textContent = pickedColor;
    message.textContent = "";
    h1.style.background = "#232323";
    for (var i = 0; i < squares.length; i++) {
        if (i < 3) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    };
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            reset.textContent = "Play Again!";
            message.textContent = "Correct!";
        } else {
            this.style.background = "#232323";
            message.textContent = "Incorrect";
        }
    });
};

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function getColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
};

function randomColors() {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
};

function pick() {
    var x = Math.floor(Math.random() * colors.length);
    return colors[x];
};