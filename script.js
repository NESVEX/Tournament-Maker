const drawAlert = "teams can't have a draw, change the draw result";

let winnerQ1;
let winnerQ2;
let winnerQ3;
let winnerQ4;

const team1QScore = document.getElementById("Q1L");
const team2QScore = document.getElementById("Q1V");
const team3QScore = document.getElementById("Q2L");
const team4QScore = document.getElementById("Q2V");
const team5QScore = document.getElementById("Q3L");
const team6QScore = document.getElementById("Q3V");
const team7QScore = document.getElementById("Q4L");
const team8QScore = document.getElementById("Q4V");

let winnerS1;
let winnerS2;

const localS1Score = document.getElementById("S1L");
const visitorS1Score = document.getElementById("S1V");
const localS2Score = document.getElementById("S2L");
const visitorS2Score = document.getElementById("S2V");

let tournamentWinner;

const localFinalScore = document.getElementById("localFinalScore");
const visitFinalScore = document.getElementById("visitFinalScore");

function quarterFinals(){
    //Q1 1-2
    if(team1QScore.value > team2QScore.value){
        winnerQ1 = "Team 1";
        document.getElementById("localS1").innerHTML = winnerQ1;
    } else if(team1QScore.value === team2QScore.value){
        window.alert(drawAlert);
    } else if(team1QScore.value < team2QScore.value){
        winnerQ1 = "Team 2";
        document.getElementById("localS1").innerHTML = winnerQ1;
    }
    //Q2 3-4
    if(team3QScore.value > team4QScore.value){
        winnerQ2 = "Team 3";
        document.getElementById("visitS1").innerHTML = winnerQ2;
    } else if(team3QScore.value === team4QScore.value){
        window.alert(drawAlert);
    } else if(team3QScore.value < team4QScore.value){
        winnerQ2 = "Team 4";
        document.getElementById("visitS1").innerHTML = winnerQ2;
    }
    //Q3 5-6
    if(team5QScore.value > team6QScore.value){
        winnerQ3 = "Team 5";
        document.getElementById("localS2").innerHTML = winnerQ3;
    } else if(team5QScore.value === team6QScore.value){
        window.alert(drawAlert);
    } else if(team5QScore.value < team6QScore.value){
        winnerQ3 = "Team 6";
        document.getElementById("localS2").innerHTML = winnerQ3;
    }
    //Q4 7-8
    if(team7QScore.value > team8QScore.value){
        winnerQ4 = "Team 7";
        document.getElementById("visitS2").innerHTML = winnerQ4;
    } else if(team7QScore.value === team8QScore.value){
        window.alert(drawAlert);
    } else if(team7QScore.value < team8QScore.value){
        winnerQ4 = "Team 8";
        document.getElementById("visitS2").innerHTML = winnerQ4;
    }
}

function semiFinals(){

    if(localS1Score.value > visitorS1Score.value){
        winnerS1 = winnerQ1;
        document.getElementById("localTeamFinal").innerHTML = winnerS1;
    } else if(localS1Score.value === visitorS1Score.value){
        window.alert(drawAlert);
    } else {
        winnerS1 = winnerQ2;
        document.getElementById("localTeamFinal").innerHTML = winnerS1;
    }

    if(localS2Score.value > visitorS2Score.value){
        winnerS2 = winnerQ3;
        document.getElementById("visitTeamFinal").innerHTML = winnerS2;
    } else if(localS2Score.value === visitorS2Score.value){
        window.alert(drawAlert);
    } else {
        winnerS2 = winnerQ4;
        document.getElementById("visitTeamFinal").innerHTML = winnerS2;
    }
}

function final(){

    if(localFinalScore.value > visitFinalScore.value){
        tournamentWinner = winnerS1;
        document.getElementById("tournamentWinner").innerHTML = tournamentWinner;
    } else if(localFinalScore.value === visitFinalScore.value){
        window.alert(drawAlert);
    } else {
        tournamentWinner = winnerS2;
        document.getElementById("tournamentWinner").innerHTML = tournamentWinner;
    }
}