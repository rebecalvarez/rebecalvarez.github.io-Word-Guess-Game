//Christmas Music

//var myMusic;
//These are the words to be guessed
var words = [
  "noel",
  "advent",
  "angels",
  "bells",
  "happy",
  "holiday",
  "star",
  "holy",
  "jolly",
  "lights",
  "lists",
  "merry",
  "miracle",
  "party"
];

//This will pick the word on the array of "words"   
var word = words[Math.floor(Math.random() * words.length)];
var lives = 5;  //how many lives do I have
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
var remainingLetters;
var gameover= false;
console.log(lives);
console.log(uniqLetters);

// Empty array called answer Array and filled with underscores (_)

var answerArray = [];

//Starts the Game
function start() {
 
 
// Printing the word blanks

  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  remainingLetters = word.length;
  fullWord = answerArray.join(" ");


  document.getElementById("fullWord").innerHTML = fullWord;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("lives").innerHTML = lives;


  console.log(remainingLetters);
  console.log(answerArray);


  // This function is run whenever the user presses a key.
  document.onkeyup = function (event) {

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
      if (wrongcount === 0) {
        wrongLetters.push(userGuess);
      }
    }
    // Call the function wrongcheck
    wrongcheck()



    console.log("this are wrong letters" + wrongLetters)

    // it will take any repeted letter out of the array

    uniqWrong = wrongLetters.reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);

    lives = 5 - uniqWrong.length;
    console.log(uniqWrong);

    allLetters = rightLetters.concat(wrongLetters);
    uniqLetters = allLetters.reduce(function (a, b) { // it will take any repeted letter out of the array
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);

    

    fullWord = answerArray.join(" ");
    document.getElementById("fullWord").innerHTML = fullWord;
    document.getElementById("wins").innerHTML = wins;

    document.getElementById("uniqLetters").innerHTML = uniqLetters;
    document.getElementById("lives").innerHTML = lives;


    console.log(answerArray);
    console.log(word);
    console.log(remainingLetters);
    console.log(lives);

    if (userGuess === "y" && gameover) {
      //letters guessed starting from 0
      answerArray = [];
      uniqWrong = [];
      fullWord = "";
      word = words[Math.floor(Math.random() * words.length)];
      remainingLetters = word.length;
      lives = 5;  //how many lives do I have
      winResult = "";
      keysTypedArray = []; //this is an array of typed letters
     console.log('wins: ' + wins);

      rightLetters = [];
      wrongLetters = [];
      allLetters = []; // all the letters typed
      uniqLetters = [];
      loserresult = "";
      gameover = false;
         document.getElementById("winResult").innerHTML = '';
         document.getElementById("loserresult").innerHTML = '';

      document.getElementById("uniqLetters").innerHTML = uniqLetters;
      start()
    }
// Loser case
    if (lives <= 0) {
      gameover = true;
      var loserresult =
        "<h1>You Lose!</h1>" +
        "<h2>Don't be like Mr. Scrooge! </h2>" +  "<p>Would you like to play again? <br> <strong>Type 'y' or 'n'</strong></p>";
      document.getElementById("loserresult").innerHTML = loserresult;
    }

    if (remainingLetters <= 0) {
      gameover= true;
       wins++;
      document.getElementById("wins").innerHTML = wins;
      
       var winResult =
       "<h1>Merry Christmas!! You WON!</h1>" +
       "<h3>Would you like to play again? <br> Type 'y' or 'n'</h3>";
        
      document.getElementById("winResult").innerHTML = winResult;
      
       console.log('wins: ' + wins);
    }


  };
};