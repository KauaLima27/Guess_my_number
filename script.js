let guess = document.getElementById("guess")
let btnCheck = document.getElementById("btnCheck")
let score = document.getElementById("score")
let message = document.getElementById("message")
let highscore = document.getElementById("highscore")
let btnAgain = document.getElementById("btnAgain")

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber)

let scoreUser = 20
let highscoreUser = 0

score.innerHTML = scoreUser


/* btnCheck.addEventListener('click'{}) */

function verificacao() {

    var numero = document.getElementById('guess').value;
    //var mensagem = document.getElementById("message").value
    if (numero > 20 || numero < 1) {
        alert("Digite um numero entre 1 e 20.")

    } else if(scoreUser == 0) {
        document.body.style.backgroundColor = "red"
        message.innerHTML = "Acabaram as tentativas!";
        score.innerHTML = "GAME OVER"
        
    } else if (numero < randomNumber) {
        message.innerHTML = "Too Loooow";
        scoreUser--
        score.innerHTML = scoreUser

    } else if (numero > randomNumber) {
        scoreUser--
        score.innerHTML = scoreUser
        message.innerHTML = "Too High";

    } else {
        message.innerHTML = "Acertô Miseravi";
        document.body.style.backgroundColor = "green"
        //highscoreUser = scoreUser
        //highscore.innerHTML = highscoreUser

        if (scoreUser > highscoreUser ) {
            highscoreUser = scoreUser
            highscore.innerHTML = highscoreUser
        } else{
            highscore.innerHTML =  highscoreUser
        }

        score.innerHTML = "YOU WIN!"
        secret.innerHTML = numero
    }
   
    

    /*     if(scoreUser > highscoreUser){
    
            scoreUser = highscoreUser
        } */
}

function again() {
    scoreUser = 20
    message.innerHTML = "Start guessing..."
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score.innerHTML = scoreUser
    console.log(randomNumber)
    document.body.style.backgroundColor = "#222"
    guess.value = ""
    secret.innerHTML = "?"
}

