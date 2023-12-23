let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
};

upScore();

let isPlaying = false;
let intervalId;

function autoGame(){
  if(!isPlaying){
  intervalId = setInterval(function(){
     const p_Move = pickMove();
     playGame(p_Move);
   }, 2000);

    isPlaying = true;
 } else {
    clearInterval(intervalId);
    isPlaying = false;

 }
  
}

function playGame(playerMove){
    const computerMove = pickMove();
    let result = '';
    
    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
        result = 'Tie.';
    } else if(computerMove === 'paper'){
        result = 'You lose.';
    } else if(computerMove === 'scissors'){
        result = 'You win.';
    }
 } else if(playerMove === 'paper'){
       if (computerMove === 'rock'){
           result = 'You win.';
      } else if(computerMove === 'paper'){
           result = 'Tie.';
      } else if(computerMove === 'scissors'){
           result = 'You lose.';
    }
 } else if(playerMove === 'scissors'){
    if (computerMove === 'rock'){
           result = 'You lose.';
      } else if(computerMove === 'paper'){
           result = 'You win.';
      } else if(computerMove === 'scissors'){
           result = 'Tie.';
    }
 }
  
  if(result === 'You win.'){
      score.wins += 1; 
  } else if(result === 'You lose.'){
      score.losses += 1;
  } else if(result === 'Tie.'){
      score.ties += 1;
  }
  
  
  localStorage.setItem('score',JSON.stringify(score));
  
  document.querySelector('.js-score').
 innerHTML = `Wins: ${score.wins},  Loss: ${score.losses}, Ties: ${score.ties}`;
  
  document.querySelector('.js-result').innerHTML = `${result}`;
  
  document.querySelector('.js-move').innerHTML = `You picked <img src = "https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png" class = "js-image">
    
     computer picked <img src = "https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove}-emoji.png" class = "js-image">`;
  
  /*alert(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}
 Wins: ${score.wins}    Loss: ${score.losses}    Ties: ${score.ties}`);*/
  
 
}

function upScore(){ // to update score
    document.querySelector('.js-score').
 innerHTML = `Wins: ${score.wins},  Loss: ${score.losses}, Ties: ${score.ties}`;
}

function pickMove(){
    const randNum = Math.random();
    let computerMove = '';
    
    if(randNum >= 0 && randNum <1/3){
        computerMove = 'rock';
    } else if(randNum >= 1/3 && randNum < 2/3){
        computerMove = 'paper';
    } else if(randNum >= 2/3 && randNum < 1){
        computerMove = 'scissors';
    }
    
    return computerMove;
    }