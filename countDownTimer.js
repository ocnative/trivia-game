
//  Trivia Time Clock

//  Step 1:
var audio = new Audio("assets/audio/7658-bong-hit-sound.wav");

//  Step 2:
//  Once time runs out, execute the timesUp function

setTimeout(timeGame 1000 * 120);

//  Step 3:
//  Change screen to show that time is up and the game results.
function timeUp() {

  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("Time's Up!");

  //  The following line will play the audio file we linked to above:
  audio.play();
}
