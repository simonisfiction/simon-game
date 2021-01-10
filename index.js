document.addEventListener("keydown", function() {
  gameLoop();
});

var buttons = [];
buttons = document.querySelectorAll("button");

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

  }
}

var fail = false;
function gameLoop(){
  while(!fail){

  }
}

function checkFail(userArray gameArray) {

}


//return a random number from 1-4
function randomNumber() {
  return (1 + Math.round(Math.random() * 4));
}