/**
 * Created by Tom's Desktop on 4/21/2016.
 */

//------------------------- VARIABLES -----------------------------
var numSquares = 6;
var colors = [];                                            // Array to hold values of the colors that will be used for the squares
var pickedColor;                                            // To hold the color picked to guess
var squares = document.querySelectorAll(".square");         // Variable to hold all squares
var guessDisplay = document.querySelector("#colorDisplay"); // display for the color to guess
var msgDisplay = document.querySelector("#message");        // display for msg
var h1 = document.querySelector("h1");                      // h1
var resetButton = document.querySelector("#reset");         // Button for reset
var modeButtons = document.querySelectorAll(".mode");       // buttons for difficulties easy & hard
//------------------------- LOGIC JS -----------------------------
init();
resetButton.addEventListener("click", reset);


//------------------------- FUNCTIONS -----------------------------
/**
 * init:
 *  Function that initializes the game
 * */
function init()
{
    // Mode Button Listeners
    setupModeButtons();
    // Set up the squares
    setupSquares();
    // reset the game
    reset();
}

/**
 * setupModeButtons:
 *  Function that sets up the buttons on the bar
 * */
function setupModeButtons()
{
    for(var i = 0; i < modeButtons.length;i++)
    {
        // Add eventListeners for any button
        modeButtons[i].addEventListener("click",function () {
            // This adds the class selected to any made button
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // First check if 3 or 6 (easy/hard)
            if (this.textContent === "Easy")
                numSquares = 3;
            else
                numSquares = 6;
            reset();
        });
    }
}

/**
 * setupSquares:
 *  Funcitons to setup the squares and colors to guess and click
 * */
function setupSquares()
{
    for(var i = 0;i < squares.length;i++)
    {
        // Set the color for each square
        squares[i].style.background = colors[i];
        // Add event listeners for each square
        squares[i].addEventListener("click",function () {
            // Variable to hold the value clicked
            var colorClicked = this.style.background;
            // Check if equal
            // If correct
            if(colorClicked === pickedColor)
            {
                msgDisplay.textContent = "Correct!";        // Print “Correct”
                changeColors(colorClicked);                 // Reset colors
                h1.style.background = colorClicked;         // Reset the background color
                resetButton.textContent = "PLAY AGAIN?";    // reset the text of the reset button
            }
            else
            {
                msgDisplay.textContent = "Try Again";
                this.style.background = "#232323";
            }
        });
    }
}

/**
 * changeColors:
 *  Function to change the colors of all the square to the correct guess
 * */
function changeColors(color)
{
    // Make all 6 of the color re appear with the same color
    for(var i =0;i<squares.length;i++)
    {
        squares[i].style.background = color;
    }
}

/**
 * pickColor:
 *  Function to pick a color at random for the guess
 * */
function pickColor() {
    // MY WAY
    // var red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    // var green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    // var blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    // var randColor = ("rgb(" + red + ", "+green+", "+ blue + ")");
    // return randColor;

    // His way
    var random = Math.floor(Math.random() * colors.length);

    // Return
    return colors[random];
}

/**
 * generateRandomColors:
 *  Function to generate the random colors for the squares
 * */
function generateRandomColors(num)
{
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0;i < num;i++)
    {
        // get random color and push to arr
        arr.push(randomColor());
    }
    // return array
    return arr;
}

/**
 * randomColor:
 *  Function to pick a color at random
 * */
function randomColor() {
    //Pick a red color from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Pick a green color from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //Pick a blue color from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g +", "+ b + ")";
}

/**
 * reset
 *  Function to reset game to new colors
 * */
function reset()
{
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // Change color display to match picked color
    guessDisplay.textContent = pickedColor;
    // reset contents of button to new colors
    resetButton.textContent = "New Colors";
    // empty out the span with "correct!/try again"
    msgDisplay.textContent = "";
    // change colors of squares
    for(var i=0;i<squares.length;i++)
    {
        if (colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else
            squares[i].style.display = "none";
    }
    // reset the background color of h1
    h1.style.background = "steelblue"
}
// OLD UNMODULAR SHIT
// /**
//  * easyClicked
//  *  Function to set the difficulty of the game to easy
//  * */
// function easyClicked()
// {
//     // reset top
//     // Highlight button clicked
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//
//     // get new random colors only three and update
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     guessDisplay.textContent = pickedColor;
//
//     // set bottom three to none with style.display
//     for(var i = 0;i < squares.length;i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         }
//         else
//         {
//             squares[i].style.display = "none";
//         }
//     }
// }
//
// /**
//  * hardClicked
//  *  Function to set the difficulty of the game to hard
//  * */
// function hardClicked()
// {
//     // Highlight button clicked
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//
//     // get new random colors only three and update
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     guessDisplay.textContent = pickedColor;
//     h1.style.background = "#steelblue";
//
//     // set bottom three to none with style.display
//     for(var i = 0;i < squares.length;i++)
//     {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// }
//
//
