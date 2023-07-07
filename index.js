let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var started = false;
let level=0;
$(document).keypress(function() {
    if(!started){
        $("#level-title").text("Level :"+level);
        nextSequence();
        started = true;
    }
   
})


$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function nextSequence() {
    userClickedPattern = [];
    level++;
   
    $("#level-title").text("Level :"+level);
    var randomNum = Math.round(Math.random() * 3);
    let randomChosencolor = buttonColors[randomNum];
    gamePattern.push(randomChosencolor);
    $("#" + randomChosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosencolor);
}
function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){ 
        // console.log("success")
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);

    }
}

    else{
        // console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      
      startover();
    }


}
function startover()
{
    level = 0;
    gamePattern = [];
    started = false;
}
function animatePress(currentColor){
    
    $("."+currentColor).addClass("pressed");
    setTimeout(function() {
        $("."+currentColor).removeClass("pressed");
    },100)
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}