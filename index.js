
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


