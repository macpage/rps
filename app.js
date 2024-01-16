let round = 0;
let botArray = ['rock', 'paper', 'scissor'];
let botChoice;
let choice;
let player_score = 0;
let bot_score = 0;

let player_spawn = document.querySelector('#playerspawn');
let bot_spawn = document.querySelector('#botspawn');
// Game logic
document.querySelector('#rock').addEventListener('click', () => {
  choice = 'rock';
  choice_made();
  console.log(player_score);
  console.log(bot_score);
  player_spawn.src = 'pics/rock.png';
  document.querySelector('#playerscore').innerHTML = player_score;
  document.querySelector('#botscore').innerHTML = bot_score;
});

document.querySelector('#paper').addEventListener('click', () => {
  choice = 'paper';
  choice_made();
  player_spawn.src = 'pics/paper.png';
  document.querySelector('#playerscore').innerHTML = player_score;
  document.querySelector('#botscore').innerHTML = bot_score;
});

document.querySelector('#scissor').addEventListener('click', () => {
  choice = 'scissor';

  choice_made();
  player_spawn.src = 'pics/scissor.png';
  document.querySelector('#playerscore').innerHTML = player_score;
  document.querySelector('#botscore').innerHTML = bot_score;
});

function choice_made() {
  botChoice = botArray[Math.floor(Math.random() * 3)];
  bot_spawn.src = 'pics/' + botChoice + '.png';
  console.log('bot: ' + botChoice);
  console.log('you: ' + choice);
  switch (choice) {
    case 'rock':
      {
        if (botChoice == 'paper') {
          bot_score++;
        }
        if (botChoice == 'scissor') {
          player_score++;
        }
      }
      break;
    case 'paper':
      {
        if (botChoice == 'rock') {
          player_score++;
        }
        if (botChoice == 'scissor') {
          bot_score++;
        }
      }
      break;
    case 'scissor': {
      if (botChoice == 'rock') {
        bot_score++;
      }
      if (botChoice == 'paper') {
        player_score++;
      }
    }
  }
}
