$(document).ready(function(){
  $("#answer").hide();
  var magicBall = {};
  
  magicBall.answers = ["No", "Yes", "I don't think so", "Of Course", "Indubitably", "In your dreams"];

  magicBall.run = function (question){
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    $("#answer").fadeIn(4000);
  console.log(question);
  var randomNumber = Math.random();
  var randomLength = randomNumber * this.answers.length;
  var randomIndex = Math.floor(randomLength);
  var randomAnswer = this.answers[randomIndex];
  console.log(randomAnswer);
  $("#answer").text(randomAnswer);
    
    
  };
  
  var promptBox = function(){
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    $("#answer").hide();
    var question = prompt("Ask me a question");
    magicBall.run(question);
    //$("#8ball").effect("shake");
    $("#8ball").effect( "shake" );
  };

  $("#questionButton").click(promptBox);
  
});