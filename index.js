
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0; 
let guestScore = 0;


function addPoints(team,score) {
    if (team == 'home') {
        homeScore += score
        homeScoreEl.textContent = homeScore
    }
    else {
        guestScore += score
        guestScoreEl.textContent = guestScore
    }
}

function newGame () {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

var timerId;
var min = 4;
                    var sec = 59;
                    var isplay = true;
                    document.getElementById('pause').style.display = 'none';
                function startTimer() {
                    var btton = document.getElementById('start').style.display = 'none';
                    document.getElementById('pause').style.display = 'inline';
                    
                    timerId = setInterval(function () {
                        document.getElementById('timer').innerHTML = min + ":" + sec;
                        sec--;
                        if (sec == -1) {
                            min--;
                            sec = 59;
                        }
                        if (min == -1) {
                            clearTimeout(timerId);
                        }
                        if (sec < 10) {
                            sec = "0" + sec;
                        }

                    }, 1000);
                }

function pause() {
  clearInterval(timerId);
  document.getElementById('start').style.display = 'inline';
  document.getElementById('pause').style.display = 'none';
}
