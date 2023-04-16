const drawAlert = "teams can't have a draw, change the draw result";

const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
const team3 = document.getElementById("team3");
const team4 = document.getElementById("team4");
const team5 = document.getElementById("team5");
const team6 = document.getElementById("team6");
const team7 = document.getElementById("team7");
const team8 = document.getElementById("team8");

const qTeam1 = document.getElementById("qTeam1");
const qTeam2 = document.getElementById("qTeam2");
const qTeam3 = document.getElementById("qTeam3");
const qTeam4 = document.getElementById("qTeam4");
const qTeam5 = document.getElementById("qTeam5");
const qTeam6 = document.getElementById("qTeam6");
const qTeam7 = document.getElementById("qTeam7");
const qTeam8 = document.getElementById("qTeam8");


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

document.getElementById("quarterFinal1Btn").disabled = true;
document.getElementById("quarterFinal2Btn").disabled = true;
document.getElementById("quarterFinal3Btn").disabled = true;
document.getElementById("quarterFinal4Btn").disabled = true;

document.getElementById("semiFinal1Btn").disabled = true;
document.getElementById("semiFinal2Btn").disabled = true;

document.getElementById("finalBtn").disabled = true;

function shuffleTeams(){
    let teamArray = [team1.value , team2.value, team3.value, team4.value, team5.value, team6.value, team7.value, team8.value];
    let arrChecker;
    console.log(teamArray)
    for(let i = 0; i < teamArray.length; i++){
        if (Object.keys(teamArray[i]).length === 0){
            arrChecker = 0;
            console.log(arrChecker);
        }
    }
    if(arrChecker == 0){
        window.alert("Please introduce every team name")
    } else {
        const shuffledTeams = teamArray.sort((a, b) => 0.5 - Math.random());

        document.getElementById("qTeam1").innerHTML = teamArray[0];
        document.getElementById("qTeam2").innerHTML = teamArray[1];
        document.getElementById("qTeam3").innerHTML = teamArray[2];
        document.getElementById("qTeam4").innerHTML = teamArray[3];
        document.getElementById("qTeam5").innerHTML = teamArray[4];
        document.getElementById("qTeam6").innerHTML = teamArray[5];
        document.getElementById("qTeam7").innerHTML = teamArray[6];
        document.getElementById("qTeam8").innerHTML = teamArray[7];
    
        document.getElementById("team1").readOnly = true;
        document.getElementById("team2").readOnly = true;
        document.getElementById("team3").readOnly = true;
        document.getElementById("team4").readOnly = true;
        document.getElementById("team5").readOnly = true;
        document.getElementById("team6").readOnly = true;
        document.getElementById("team7").readOnly = true;
        document.getElementById("team8").readOnly = true;

        document.getElementById("shuffleBtn").disabled = true;
        document.getElementById("quarterFinal1Btn").disabled = false;
        document.getElementById("quarterFinal2Btn").disabled = false;
        document.getElementById("quarterFinal3Btn").disabled = false;
        document.getElementById("quarterFinal4Btn").disabled = false;
    }
}

function quarterFinal1(){

    if(team1QScore.value > team2QScore.value){
        winnerQ1 = qTeam1.innerHTML;
        document.getElementById("localS1").innerHTML = winnerQ1;
        document.getElementById("quarterFinal1Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    } else if(team1QScore.value === team2QScore.value){
        window.alert(drawAlert);
    } else if(team1QScore.value < team2QScore.value){
        winnerQ1 = qTeam2.innerHTML;
        document.getElementById("localS1").innerHTML = winnerQ1;
        document.getElementById("quarterFinal1Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    }

}
function quarterFinal2(){
    
    if(team3QScore.value > team4QScore.value){
        winnerQ2 = qTeam3.innerHTML;
        document.getElementById("visitS1").innerHTML = winnerQ2;
        document.getElementById("quarterFinal2Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    } else if(team3QScore.value === team4QScore.value){
        window.alert(drawAlert);
    } else if(team3QScore.value < team4QScore.value){
        winnerQ2 = qTeam4.innerHTML;
        document.getElementById("visitS1").innerHTML = winnerQ2;
        document.getElementById("quarterFinal2Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    }

}
function quarterFinal3(){

    if(team5QScore.value > team6QScore.value){
        winnerQ3 = qTeam5.innerHTML;
        document.getElementById("localS2").innerHTML = winnerQ3;
        document.getElementById("quarterFinal3Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    } else if(team5QScore.value === team6QScore.value){
        window.alert(drawAlert);
    } else if(team5QScore.value < team6QScore.value){
        winnerQ3 = qTeam6.innerHTML;
        document.getElementById("localS2").innerHTML = winnerQ3;
        document.getElementById("quarterFinal3Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    }
    
}
function quarterFinal4(){

    if(team7QScore.value > team8QScore.value){
        winnerQ4 = qTeam7.innerHTML;
        document.getElementById("visitS2").innerHTML = winnerQ4;
        document.getElementById("quarterFinal4Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    } else if(team7QScore.value === team8QScore.value){
        window.alert(drawAlert);
    } else if(team7QScore.value < team8QScore.value){
        winnerQ4 = qTeam8.innerHTML;
        document.getElementById("visitS2").innerHTML = winnerQ4;
        document.getElementById("quarterFinal4Btn").disabled = true
        if(winnerQ1 && winnerQ2 && winnerQ3 && winnerQ4 != null){
            document.getElementById("semiFinal1Btn").disabled = false;
            document.getElementById("semiFinal2Btn").disabled = false;
        }
    }

}

function semiFinal1(){

    if(localS1Score.value > visitorS1Score.value){
        winnerS1 = winnerQ1;
        document.getElementById("localTeamFinal").innerHTML = winnerS1;
        document.getElementById("semiFinal1Btn").disabled = true;
        if(winnerS1 && winnerS2!= null){
            document.getElementById("finalBtn").disabled = false;
        }
    } else if(localS1Score.value === visitorS1Score.value){
        window.alert(drawAlert);
    } else {
        winnerS1 = winnerQ2;
        document.getElementById("localTeamFinal").innerHTML = winnerS1;
        document.getElementById("semiFinal1Btn").disabled = true;
        if(winnerS1 && winnerS2!= null){
            document.getElementById("finalBtn").disabled = false;
        }
    }

}
function semiFinal2(){

    if(localS2Score.value > visitorS2Score.value){
        winnerS2 = winnerQ3;
        document.getElementById("visitTeamFinal").innerHTML = winnerS2;
        document.getElementById("semiFinal2Btn").disabled = true;
        if(winnerS1 && winnerS2!= null){
            document.getElementById("finalBtn").disabled = false;
        }
    } else if(localS2Score.value === visitorS2Score.value){
        window.alert(drawAlert);
    } else {
        winnerS2 = winnerQ4;
        document.getElementById("visitTeamFinal").innerHTML = winnerS2;
        document.getElementById("semiFinal2Btn").disabled = true;
        if(winnerS1 && winnerS2!= null){
            document.getElementById("finalBtn").disabled = false;
        }
    }

}

function final(){

    if(localFinalScore.value > visitFinalScore.value){
        tournamentWinner = winnerS1;
        document.getElementById("tournamentWinner").innerHTML = tournamentWinner;
        document.getElementById("finalBtn").disabled = true;
    } else if(localFinalScore.value === visitFinalScore.value){
        window.alert(drawAlert);
    } else {
        tournamentWinner = winnerS2;
        document.getElementById("tournamentWinner").innerHTML = tournamentWinner;
        document.getElementById("finalBtn").disabled = true;
    }

}


function isNumber(evt)
		 {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true; }