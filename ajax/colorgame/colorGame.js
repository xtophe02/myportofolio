var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');

var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');

// var easyButton = document.querySelector('#easy');
// var hardButton = document.querySelector('#hard');

var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  //mode buttons(easy/hard)
  setUpModeButtons();
  setSquaresListPlusColors();
  reset();

}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      // alert();
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });

  }
}

function reset() {
  colors = generateRamdomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }

  // colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function () {
  reset();
});

function setSquaresListPlusColors() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click Listeneres to squares
    squares[i].addEventListener('click', function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again!';
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generateRamdomColors(num) {
  var arr = [];
  var stringColor;
  for (var i = 0; i < num; i++) {
    arr.push(ramdomColor());
  }

  return arr;
}

function ramdomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
