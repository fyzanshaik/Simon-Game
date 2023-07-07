$(document).ready(function() {
    let pcArr = generatePCarr();
    let userArr = [];
    let level = 1;
    let playing = true;
    var levelIndicator = "Level: " + level;
  
    $(document).on("keydown", function() {
      playGame();
    });
  
    $(".btn").click(function() {
      var buttonID = $(this).attr("id");
      if (playing) {
        pressAnimation(buttonID);
        playAudio(buttonID);
        userArr.push(buttonID);
  
        var continuation = validityCheck(pcArr, userArr, level);
        console.log(continuation);
        if (continuation) {
          if (userArr.length === level) {
            level++;
            userArr = [];
            playGame();
          }
        } else {
          playing = false;
        }
      }
    });
  
    function playGame() {
      if (playing) {
        $("#level-title").text(levelIndicator);
        computerPlay(pcArr, level);
      }
    }
  
    function waitForUserInput(callback) {
        $(".btn").one("click", function() {
          var buttonID = $(this).attr("id");
          callback(buttonID);
        });
      }
        
        function validityCheck(arr,arr1,level)
        {
            for(let i=0;i<level;i++)
            {
                if(arr[i]!=arr1[i]){
                    return false;
                }
            }
            return true;
        }
    
    
        function computerPlay(arr,level){
            for(let i=0;i<level;i++){
                console.log(arr[i]);
                pressAnimation(arr[i]);
                playAudio(arr[i]);
    
            }
    
        }
        function playAudio(color){
            let audio;
            switch(color){
                case "red":
                    audio = new Audio("./sounds/red.mp3");break;
                case "blue":
                    audio = new Audio("./sounds/blue.mp3");break;
                case "green":
                    audio = new Audio("./sounds/green.mp3");break;
                case "yellow":
                    audio = new Audio("./sounds/yellow.mp3");break;
                default:
                    audio = new Audio("./sounds/wrong.mp3");break;                
            }
            audio.play();
        }
    
        function pressAnimation(color)
        {
            var $button = $("." + color);
            // console.log($button)
            $button.addClass("pressed");
            setTimeout(function() {
                $button.removeClass("pressed");
            }, 500);
        }
    
        function generatePCarr() {
    
            let i; let randNum; let arr = [];
            for(i = 0; i < 100;i++)
            {
                randNum = Math.round(Math.random() * 3);
                switch(randNum)
                {
                    case 0: arr.push("red");break;
                    case 1: arr.push("green");break;
                    case 2: arr.push("blue");break;
                    case 3 : arr.push("yellow");break;
                }
            }
            return arr;
        }
    
      function playGame() {
        if (playing) {
          $("#level-title").text(levelIndicator);
          computerPlay(pcArr, level);
        }
      }
  });
  



