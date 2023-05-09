function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

var Wins=0;
var Loses=0;
var Ties=0;
const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const SPOCK = 'SPOCK';
const LIZARD = 'LIZARD';
const OPTIONS = {
    1: ROCK,
    2: SCISSORS,
    3: PAPER,
    4: SPOCK,
    5: LIZARD
};
const OPTIONS2EMOJI = {
    1: '⛰️',
    2: '✂️',
    3: '🧻',
    4: '🖖',
    5: '🦎'
};
let userChoiceID = '';

window.onload = () => {
    const output = document.querySelector('#output');
    const userOptions = document.querySelectorAll('.user-option');

userOptions.forEach(el => el.addEventListener('click', event => {
    userChoiceID = event.target.id;
}));
  }
  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', () => {
    
    const computerChoiceID = getComputerChoice();
const computerChoice = OPTIONS[computerChoiceID];
const computerChoiceElement = document.querySelector('#computer-choice');
const output = document.querySelector('#output');
const userChoice = OPTIONS[userChoiceID];

let result = '';
computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];

switch (`${computerChoice}-${userChoice}`) {
    case `${ROCK}-${ROCK}`:
    case `${SCISSORS}-${SCISSORS}`:
    case `${PAPER}-${PAPER}`:
    case `${SPOCK}-${SPOCK}`:
    case `${LIZARD}-${LIZARD}`:
        result = 'TIE 👔'
        break;
    case `${ROCK}-${SCISSORS}`:
    case `${ROCK}-${LIZARD}`:
    case `${SCISSORS}-${PAPER}`:
    case `${SCISSORS}-${LIZARD}`:
    case `${PAPER}-${ROCK}`:
    case `${PAPER}-${SPOCK}`:
    case `${SPOCK}-${ROCK}`:
    case `${SPOCK}-${SCISSORS}`:
    case `${LIZARD}-${PAPER}`:
    case `${LIZARD}-${SPOCK}`:
        result = 'COMPUTER WIN 😔💔 🤖🥇'
        break;
    case `${ROCK}-${PAPER}`:
    case `${ROCK}-${SPOCK}`:
    case `${SCISSORS}-${ROCK}`:
    case `${SCISSORS}-${SPOCK}`:
    case `${PAPER}-${SCISSORS}`:
    case `${PAPER}-${LIZARD}`:
    case `${SPOCK}-${PAPER}`:
    case `${SPOCK}-${LIZARD}`:
    case `${LIZARD}-${ROCK}`:
    case `${LIZARD}-${SCISSORS}`:
        result = 'YOU WIN ☺️🥇 🤖💔'
        break;
    default:
        result = 'SOMETHING WRONG. TRY AGAIN. 🐛'
}
if (result=='YOU WIN ☺️🥇 🤖💔'){
Wins++;
}
if(result=='COMPUTER WIN 😔💔 🤖🥇'){
    Loses++;
}
if(result=='TIE 👔'){
    Ties++;
}
output.innerHTML = result;

document.getElementById("Wins").innerHTML =Wins;
document.getElementById("Loses").innerHTML =Loses;
document.getElementById("Ties").innerHTML =Ties;

})
  