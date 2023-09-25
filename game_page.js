player1 = localStorage.getItem("p1");
player2 = localStorage.getItem("p2");
score1 = 0;
score2 = 0;
questionTurn = player1;
answerTurn = player2;
document.getElementById("name1").innerHTML = player1 + " : ";
document.getElementById("name2").innerHTML = player2+ " : ";
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;
document.getElementById("questionturn").innerHTML = "Question Turn: " + questionTurn;
document.getElementById("answerturn").innerHTML = "Answer Turn: " + answerTurn;

function send() {
    inputHTML = "<input type='text' id='answer' placeholder='ENTER YOUR ANSWER' class='form-control'> <br>";
    buttonHTML = "<button class = 'btn btn-info' onclick = 'submit()'>SEND ANSWER</button> <br>";
    document.getElementById("output").innerHTML = inputHTML + buttonHTML;

}
function submit() {
    answer = document.getElementById("answer").value;
    if(word == answer) {
        if(answerTurn == player1) {
            score1++;
            
        }else if(answerTurn == player2) {
            score2++;
        }
        document.getElementById("score1").innerHTML = score1;
        document.getElementById("score2").innerHTML = score2;
    }
    document.getElementById("output").innerHTML = "";
    if ( questionTurn == player1 ) {
        questionTurn = player2;
        answerTurn = player1;
    } else{
        questionTurn = player1;
        answerTurn = player2;
    }
    document.getElementById("questionturn").innerHTML = "Question Turn: " + questionTurn;
    document.getElementById("answerturn").innerHTML = "Answer Turn: " + answerTurn;
}