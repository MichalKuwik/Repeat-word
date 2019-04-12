//check if load function on load
window.addEventListener('load',init);

//Globals variables

//Available Levels
const levels = {
    easy:5,
    medium: 3,
    hard: 2
}

//To change level
const currentLevel = levels.medium;

let time = currentLevel; //time in game active
let score = 0; //scrore of your game
let isPlaying; // ,not inicjaling ,when game is runnig,when not is false

//I get DOM elements

const wordInput = document.querySelector('input'); //input type text
const currentWord = document.querySelector('h2'); //word in h2
const scoreDisplay = document.querySelector('h3.score'); //score in h3
const timeDisplay = document.querySelector('span.second-counter'); //time in h3
const message = document.querySelector('h5.message'); // h5 message value 'correct or bad'
const seconds = document.querySelector('span.first-counter');// first-counter time to left

const words = [
    'czapka','mama','tata','drzewo','owoc','koc','kot','pies','praca','myszka','pluszak','łóżko','ubranie','bliźniaki','bohater','szczęście',
    'magia','zło','dobro','palec','telewizor','dywan','komputer','programowanie','javascript','miłość','pranie','obraz','światło','prąd','plecy','dyskopatia','zegar','okulary','samochód','drzwi','gra','przegrania','wygrana','życie'
];
// console.log(words.length);

//Initialize Game function

function init(){
    //show number of seconds - levels
    seconds.innerHTML = currentLevel;
    //load word from array
    showWord(words);
    //write text in input
    wordInput.addEventListener('input',startInput);
    //call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//if everything is correct,game is continues

function startInput(){
    if(matchWords()){
        //then game is continue
        isPlaying = true;
        time = currentLevel + 1;
        //show nwe word from array,clear input,increment score!
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = `Wynik: 0`;
    }else{
        //initalize in DOM game score
        scoreDisplay.innerHTML = `Wynik: ${score}`;
    }
    
}

//Match currentWord to wordInput equals input with currentWord from array is a simmilar
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Prawidłowo!';
        message.style.color = "green";
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

//function pick & show random word
function showWord(words){
    //get random index of array
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

//function countdown timer
function countdown(){
    //make sure time is not run out
    if(time > 0){
        //decrement
        time--;
    }else if(time === 0){
        //Game is over
        isPlaying - false;
    }
    //Show time in game
    timeDisplay.innerHTML = time;
}

//function Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Koniec gry!';
        
        //if end game reset score
        score = -1;
    }
}