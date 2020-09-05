var rock, rockImage;
var paper, paperImage;
var scissors, scissorsImage;
var questionImage;

var resetButton;
var resetImage;

var marker
var computer

var gameState = "PLAY",
  playerSelection = 0,
  computerSelection = 0;

function preload() {
  paperImage = loadImage("Paper.png");
  rockImage = loadImage("Rock.png");
  scissorsImage = loadImage("Scissor.png");
  questionImage = loadImage("question.png")
  resetImage = loadImage("reset.png");
}

function setup() {
  createCanvas(600, 600);
  marker = createSprite(100,100,100,100);
  marker.visible = false;

  rock = createSprite(100, 450, 10, 10);
  rock.addImage("rock", rockImage);
  rock.scale = 0.1;

  paper = createSprite(300, 450, 10, 10);
  paper.addImage("paper", paperImage);
  paper.scale = 0.2

  scissors = createSprite(500, 450, 10, 10);
  scissors.addImage("scissors", scissorsImage);
  scissors.scale = 0.1

  computer = createSprite(300, 150, 10, 10);
  computer.addImage("question", questionImage);
  computer.addAnimation("rock", rockImage);
  computer.addAnimation("scissors", scissorsImage);
  computer.addAnimation("paper", paperImage);
  computer.scale = 0.1

  resetButton = createSprite(500,300,20,20);
  resetButton.addImage("reset", resetImage);
  resetButton.scale = 0.1
  resetButton.visible = false
}

function draw() {
  background(255);
  console.log(playerSelection);
if(gameState === "PLAY"){
  resetButton.visible = false;
  if (mousePressedOver(rock)) {
    playerSelection = 1;
    marker.x=100; 
    marker.y=450
    marker.visible = true;
  }

  if (mousePressedOver(paper)) {
    playerSelection = 2;
    marker.x=300; 
    marker.y=450
    marker.visible = true;
  }

  if (mousePressedOver(scissors)) {
    playerSelection = 3;
    marker.x=500; 
    marker.y=450
    marker.visible = true;
  }

  if (playerSelection !== 0) {
    computerSelection = Math.round(random(1, 3))
    gameState = "END"
  }
}
  else if(gameState === "END"){
    resetButton.visible = true;
   switch (computerSelection) {
      case 1:
        computer.changeImage("rock", rockImage)
        break;
      case 2:
        computer.changeImage("paper", paperImage)
        break;
      case 3:
        computer.changeImage("scissors", scissorsImage);
        break;
      default:
        break;
    }
    if(playerSelection===computerSelection){
      textSize(20)
      text("TIE", 300,300);
      resetButton.visible = true;

    }
    if(playerSelection===1 && computerSelection===3 || playerSelection===2 && computerSelection===1 || playerSelection===3 && computerSelection===2){
      text("YOU WIN!", 300,300)
      resetButton.visible = true;
    }
    if(computerSelection===1 && playerSelection===3 || computerSelection===2 && playerSelection===1 || computerSelection===3 && playerSelection===2){
      text("YOU LOST", 300,300)
      resetButton.visible = true;
    }
  }
  if(mousePressedOver(resetButton)){
    reset();
  }

  drawSprites();
}

function reset(){
  gameState="PLAY"
playerSelection=0;
marker.visible=false;

}