//Globals variables
let time = 5; //time in game active
let score = 0; //scrore of your game
let isPlaying; // ,not inicjaling ,when game is runnig,when not is false

//I get DOM elements

const wordInput = document.querySelector('input'); //input type text
const currentWord = document.querySelector('h2'); //word in h2
const scoreDisplay = document.querySelector('h3.score'); //score in h3
const timeDisplay = document.querySelector('h3.time'); //time in h3
const message = document.querySelector('h5.message'); // h5 message value 'correct or bad'
const seconds = document.querySelector('span.first-counter');// first-counter time to left
