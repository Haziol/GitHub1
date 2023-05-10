function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}
//Function(w tym nawiasie sa zmienne,ktore musisz podac w funkcji do jej wykorzystania w tym {})

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
//To wszystko wyzej to zmienne. Const to tzw zmienna stała której po zadeklarowaniu nie mozemy w zaden sposob zmienic pozniej w programie.Zmienna let - zmienna lokalna (np dajemy ja w petli for/jakiejs funkcji to bedzie ona dzialala tylko w obrebie tej funkcji). Var to zmienna globalna ktora mozna zmieniac dowolnie i mozna ich uzywac w calym kodzie.
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
        result = 'REMIS 👔'
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
        result = 'KOMPUTER WYGRYWA 😔💔 🤖🥇'
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
        result = 'BRAWO! WYGRAŁEŚ 🥇'
        break;
    default:
        result = 'COS POSZLO NIE TAK! SPROBUJ PONOWNIE. 🐛'
        //Tutaj w funkcji switch wypisujemy wszystkie przypadki dla danego rozwiazania.Deafult dziala kiedy nic nie wybierzesz albo wprowadzisz bledna wartosc.
}
if (result=='BRAWO! WYGRAŁEŚ 🥇'){
Wins++;
}
if(result=='KOMPUTER WYGRYWA 😔💔 🤖🥇'){
    Loses++;
}
if(result=='REMIS 👔'){
    Ties++;
}
//No to tutaj po prostu funkcja if podlicza ile mamy porazek,zwyciestw i remisow.
output.innerHTML = result;

document.getElementById("Wins").innerHTML =Wins;
document.getElementById("Loses").innerHTML =Loses;
document.getElementById("Ties").innerHTML =Ties;
//To pobiera wartosc o id podanej w nawiasie z HTML a nastepnie przypisuje ta wartosc do zmiennycy po znaku =.

})
  