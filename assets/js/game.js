
//These are the words to be guessed
var words = [
    "backstreetboys",
    "thecranberries",
    "madonna",
    "celinedion",
    "savagegarden"
   ];
//This will pick the word on the array of "words"   
var word = words[Math.floor(Math.random() * words.length)];
var lives = 5;  //how many lives do I have
var wins = 0;
var userGuess; //key guess by user



// Empty array called answer Array and filled with underscores (_)

var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = word.length;

console.log(remainingLetters);
console.log(answerArray);


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
//This is to make sure the user input is a letter
  //  if (userGuess !== )



//updating de Game answers

for (var j = 0; j < word.length; j++) {
   if (word[j] === userGuess) {
     answerArray[j] = userGuess;
     remainingLetters--;
     }
      
    }

    var keysTypedArray = []; //this is an array of typed letters
// Empty array called userGuess and filled with typed letters

//----------------------------------------
if ( Array.isArray(keysTypedArray) && keysTypedArray.length === 0){
  keysTypedArray.push(userGuess);
// keysTypedArray.splice(keysTypedArray.length, 0, userGuess);
    keysTypedArray.length++;
    console.log(keysTypedArray);}
    
else { for (var k = 0; k < keysTypedArray.length; k++){
            if ( keysTypedArray[k] !== userGuess)
            keysTypedArray.splice(keysTypedArray.length, 0, userGuess);
            console.log(keysTypedArray);
}}
//------------------------------------------------
    
//if ( keysTypedArray.length > 0){
       //  - not necesary - keysTypedArray.push(userGuess);
 //     keysTypedArray.splice(keysTypedArray.length, 0, userGuess);
      // keysTypedArray.length++;
//      console.log("this is the first keyTypedArray" + keysTypedArray);
//    }
 // else { for (var k = 0; k < keysTypedArray.length; k++){
            // if ( keysTypedArray[k] !== userGuess)
   //              keysTypedArray.splice(keysTypedArray.length, 0, userGuess);
  //               console.log("this is the fill in keyTypedArray" + keysTypedArray);
//    }}
  

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

};