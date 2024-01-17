let round = 0;
let botArray = ['rock', 'paper', 'scissor'];
let botChoice;
let choice;
let player_score = 0;
let bot_score = 0;

let player_spawn = document.querySelector('#playerspawn');

let bot_spawn = document.querySelector('#botspawn');

let sounds = [
  new Audio('sounds/win.mp3'),
  new Audio('sounds/lose.mp3'),
  new Audio('sounds/draw.mp3'),
];

let soundbutton = document.querySelector('#soundbutton');
let sound = true;
soundbutton.addEventListener('click', () => {
  if (sound) {
    sound = false;
    sounds[0].volume = 0;
    sounds[1].volume = 0;
    sounds[2].volume = 0;
    document.querySelector('#soundbutton').childNodes[1].src =
      'pics/sound_off.png';
  } else {
    sound = true;
    sounds[0].volume = 1;
    sounds[1].volume = 1;
    sounds[2].volume = 1;
    document.querySelector('#soundbutton').childNodes[1].src =
      'pics/sound_on.png';
  }
});

// Game logic
document.querySelector('#rock').addEventListener('click', () => {
  player_spawn.classList.add('scale');
  bot_spawn.classList.add('scale');
  player_spawn.addEventListener('animationend', () => {
    player_spawn.classList.remove('scale');
    bot_spawn.classList.remove('scale');
  });

  choice = 'rock';
  choice_made();
  console.log(player_score);
  console.log(bot_score);
  player_spawn.src = 'pics/rock.png';
  document.querySelector('#playerscore').innerHTML = player_score;
  document.querySelector('#botscore').innerHTML = bot_score;
});

document.querySelector('#paper').addEventListener('click', () => {
  player_spawn.classList.add('scale');
  bot_spawn.classList.add('scale');
  player_spawn.addEventListener('animationend', () => {
    player_spawn.classList.remove('scale');
    bot_spawn.classList.remove('scale');
  });
  choice = 'paper';
  choice_made();
  player_spawn.src = 'pics/paper.png';
  document.querySelector('#playerscore').innerHTML = player_score;
  document.querySelector('#botscore').innerHTML = bot_score;
});

document.querySelector('#scissor').addEventListener('click', () => {
  player_spawn.classList.add('scale');
  bot_spawn.classList.add('scale');
  player_spawn.addEventListener('animationend', () => {
    player_spawn.classList.remove('scale');
    bot_spawn.classList.remove('scale');
  });
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
          sounds[1].play();
          sounds[1].currentTime = 0;
        } else if (botChoice == 'scissor') {
          player_score++;
          sounds[0].play();
          sounds[0].currentTime = 0;
        } else {
          sounds[2].play();
          sounds[2].currentTime = 0;
        }
      }
      break;
    case 'paper':
      {
        if (botChoice == 'rock') {
          player_score++;
          sounds[0].play();
          sounds[0].currentTime = 0;
        } else if (botChoice == 'scissor') {
          bot_score++;
          sounds[1].play();
          sounds[1].currentTime = 0;
        } else {
          sounds[2].play();
          sounds[2].currentTime = 0;
        }
      }
      break;
    case 'scissor': {
      if (botChoice == 'rock') {
        bot_score++;
        sounds[1].play();
        sounds[1].currentTime = 0;
      } else if (botChoice == 'paper') {
        player_score++;
        sounds[0].play();
        sounds[0].currentTime = 0;
      } else {
        sounds[2].play();
        sounds[2].currentTime = 0;
      }
    }
  }
}
