// app.js
// 
// 
// 
//
  


var panel = $("#quiz-area");

// Populate the set of seven Questions.
var questions = [{
  question: "Which movie was not directed by Luc Besson?",
  answers: ["The Professional", "3 Days to Kill", "The Fifth Element", "Atlantis"],
  correctAnswer: "3 Days to Kill"
}, {
  question: "Which of these is NOT a city where the current Los Angeles Clippers have called home?",
  answers: ["Los Angeles", "Kansas City", "Buffalo", "San Diego"],
  correctAnswer: "Kansas City"
}, {
  question: "Which of these is NOT the name of a Vincent van Gogh painting?",
  answers: ["Wheat Field", "The Starry Night", "The Potato Eaters", "Sorrow"],
  correctAnswer: "Wheat Field"
}, {
  question: "Which group released the hit song, \"Black Hole Sun\"?",
  answers: ["Nirvana", "Alice in Chains", "Pearl Jam", "Soundgarden"],
  correctAnswer: "Soundgarden"
}, {
  question: "Which popular movie featured the catch phrase,\"Have fun storming the castle!\"?",
  answers: ["The Philadelphia Story", "The Princess Bride", "Forrest Gump", "The Princess Diaries"],
  correctAnswer: "The Princess Bride"
}, {
  question: "The movie \"Airheads\" asks us this timeless question: \"Who would win a fight between Lemmy and God\"?",
  answers: ["Lemmy", "God", "It would be a draw", "Lemmy IS God!"],
  correctAnswer: "Lemmy IS God!"
}, {
  question: "According to \"The Hitchhiker's Guide to the Galaxy\", what is the meaning of life?",
  answers: ["Japanese Game Shows", "42", "Enlightenment", "Ask the Dolphins"],
  correctAnswer: "42"
}];

// Variable that will hold the setInterval
var timer;

// Variable that will hold the game data (answers and time)
var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

// 
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});