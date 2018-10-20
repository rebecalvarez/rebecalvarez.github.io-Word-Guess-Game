

//These are the words to be guessed
var words = [
  "bells",
  "advent",
  "angels",
  "announcement",
  "bells"
 ];

//This will pick the word on the array of "words"   
var word = words[Math.floor(Math.random() * words.length)];
var lives = 7;  //how many lives do I have
var wins = 0;
var userGuess; //key guess by user
var keysTypedArray = []; //this is an array of typed letters
var wins = 0;
var rightLetters = [];
var wrongLetters = [];
var allLetters = []; // all the letters typed
var uniqLetters = [];
var fullWord; // array converted to string
var uniqWrong; // takes any duplicated letter off

console.log(lives);
console.log(uniqLetters);

// Empty array called answer Array and filled with underscores (_)

var answerArray = [];

//Starts the Game
function start() {
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
var remainingLetters = word.length;
fullWord = answerArray.join(" ");


document.getElementById("fullWord").innerHTML = fullWord;
document.getElementById("wins").innerHTML = wins;
document.getElementById("lives").innerHTML = lives;


console.log(remainingLetters);
console.log(answerArray);


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

 // don't catch numbers, punctuation, enter, etc.
 if (!(event.which <= 90 && event.which >= 65)) return
  // Determines which key was pressed.
  var userGuess = event.key;


//updating de Game answers and dividing the right letter

for (var j = 0; j < word.length; j++) {
 if (word[j] === userGuess) {
   answerArray[j] = userGuess;
   remainingLetters--;
   rightLetters.push(userGuess);
   
   }       
          
} 
//updating de Game answers and dividing the  wrong letter
function wrongcheck() {
var wrongcount = word.length;

for (var w = 0; w < word.length; w++) {
 if (word[w] !== userGuess) {
   wrongcount--;
 }
}
if ( wrongcount === 0) {
wrongLetters.push(userGuess);
}
}
// Call the function wrongcheck
wrongcheck()

//  function checkIfThere(key) {
//   return key === userGuess;
// }

//  if (word.find(checkIfThere)  !== true ){
//   wrongLetters.push(userGuess);
//  }

console.log("this are wrong letters" + wrongLetters)

  uniqWrong = wrongLetters.reduce(function(a,b){ // it will take any repeted letter out of the array
     if (a.indexOf(b) < 0 ) a.push(b);
     return a;
   },[]);

  lives = 7 - uniqWrong.length;
  console.log(uniqWrong);

  allLetters = rightLetters.concat(wrongLetters);
  uniqLetters = allLetters.reduce(function(a,b){ // it will take any repeted letter out of the array
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

// Empty array called userGuess and filled with typed letters

//----------------------------------------
// if ( Array.isArray(keysTypedArray) && keysTypedArray.length === 0){
//   keysTypedArray.push(userGuess);
// // keysTypedArray.splice(keysTypedArray.length, 0, userGuess);
  
//     console.log(keysTypedArray);}
  
// else {
//      for (var k = 0; k < keysTypedArray.length; k++){
//             if ( keysTypedArray[k] !== userGuess)
//             keysTypedArray.splice(keysTypedArray.length, 0, userGuess);
//             console.log(keysTypedArray);
// }}
//------------------------------------------------
  
fullWord = answerArray.join(" ");
document.getElementById("fullWord").innerHTML = fullWord;
document.getElementById("wins").innerHTML = wins;

document.getElementById("uniqLetters").innerHTML = uniqLetters;
document.getElementById("lives").innerHTML = lives;


  console.log(answerArray);
  console.log(word);
  console.log(remainingLetters);
  console.log(lives);
  
  //Updating html

//   var html =
//  "<p>You chose: " + userGuess + "</p>";
//  "<p>The computer chose: " + computerGuess + "</p>" +
//  "<p>wins: " + wins + "</p>" +
//    "<p>losses: " + losses + "</p>" +
//    "<p>ties: " + ties + "</p>";

// Set the inner HTML contents of the #game div to our html string
//  document.querySelector("#game").innerHTML = html;

if (lives === 0 ) {
var loserresult =
"<p>You Loose would you like to play again? Type y or n</p>";
document.getElementById("loserresult").innerHTML = loserresult;
if ( userGuess === "y"){
  //letters guessed starting from 0
 
 word = words[Math.floor(Math.random() * words.length)];
 lives = 7;  //how many lives do I have

 userGuess; //key guess by user
 keysTypedArray = []; //this is an array of typed letters

 rightLetters = [];
 wrongLetters = [];
 allLetters = []; // all the letters typed
 uniqLetters = [];

 document.getElementById("uniqLetters").innerHTML = uniqLetters;
  start()


}

}


};
};