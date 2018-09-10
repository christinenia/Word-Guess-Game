var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

// create array of words
var wordList = ["awakens", "galaxy", "george", "lucas", "skywalker", "force", "star", "yoda", "kylo ren", "luke", "han solo", "bb8", "droid", "r2d2", "chewbacca", "chewie", "c3po", "lightsaber", "mace windu", "jar jar binks", "anakin", "darth vader", "poe dameron", "general hux", "rey", "finn", "leia", "millenium falcon", "galactic empire", "first order", "jedi", "storm trooper", "boba fett", "clone wars", "count dooku", "obi wan kenobi", "ackbar", "death star"];

var randomWord = Math.floor(Math.random() * wordList.length);
var rightWord = [];
var wrongWord = [];
var chosenWord = wordList[randomWord];
console.log(chosenWord);
var underScore = [];

var generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

console.log(generateUnderscore()); 
//get users guess
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
//if users guess is correct
    console.log(chosenWord.indexOf(keyword));
    if(keyword.indexOf(chosenWord) > -1) {
        rightWord.push(keyword);
     }
     else wrongWord.push(keyword);
     
});


