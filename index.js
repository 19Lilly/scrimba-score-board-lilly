
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let timerEl = document.getElementById("timer");

let homeScore = 0; 
let guestScore = 0;

var timerId;
var min = 4;
var sec = 59;
var isplay = false;

function addPoints(team,score) {
    whoIsWinning()
    if (team == 'home' && isplay == true) {
        homeScore += score
        homeScoreEl.textContent = homeScore
    }
    else if (team =='guest' && isplay == true){
        guestScore += score
        guestScoreEl.textContent = guestScore
    }
    whoIsWinning()
}

                    document.getElementById('pause').style.display = 'none';
                    function startTimer() {
                    isplay = true;
                    var btton = document.getElementById('start').style.display = 'none';
                    document.getElementById('pause').style.display = 'inline';
                    
                    timerId = setInterval(function () {
                        document.getElementById('timer').textContent = min + ":" + sec;
                        sec--;
                        if (sec == -1) {
                            min--;
                            sec = 59;
                        }
                        if (min == -1) {
                            clearTimeout(timerId);
                            isplay = false;
                        }
                        if (sec < 10) {
                            sec = "0" + sec;
                        }

                    }, 1000);
                }

function pause() {
  clearInterval(timerId);
  isplay = false;
  document.getElementById('start').style.display = 'inline';
  document.getElementById('pause').style.display = 'none';
}


function newGame () {
  homeScore = 0
  guestScore = 0
  min = 4
  sec = 59
  isplay = false;
  homeScoreEl.textContent = homeScore
  guestScoreEl.textContent = guestScore
  document.getElementById("home-score").style.backgroundColor = "black";
  document.getElementById("guest-score").style.backgroundColor = "black";
  timerEl.textContent = "5:00"
}

function whoIsWinning() {
    if (homeScore > guestScore) {
        document.getElementById("home-score").style.backgroundColor = "#31F503";
    } else if (guestScore > homeScore){
        document.getElementById("guest-score").style.backgroundColor = "#31F503";
    } else {
        document.getElementById("home-score").style.backgroundColor = "black";
        document.getElementById("guest-score").style.backgroundColor = "black";
    }
}
