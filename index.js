let randomNumber = parseInt(Math.floor(Math.random()*100) + 1)
let playGame = true 

const submit = document.querySelector(".button")
const guessNum = document.querySelector("#guessNumber")
const resultsPara = document.querySelector(".resultsPara")
const remaining = document.querySelector(".remaining")
const PreviousGuessess = document.querySelector(".PreviousGuessess")
const lowOrHigh = document.querySelector('.lowOrHigh')
const winStatus = document.querySelector(".winStatus")


if (playGame){
    

    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(guessNum.value)
        validateUserInput(guess)

    })
}

let numberGuess = 10 
let guesses = []

function validateUserInput(guess){
    if (isNaN(guess)){
        alert("Enter a Valid number")
    }else if (guess < 1 || guess > 100){
        alert("Enter a number between 1 to 100")
    }else{
        numberGuess -= 1
        if (numberGuess === 0){
            endGame("loss")
        }
        guesses.push(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        messageShown("You guessed it right !!!")
        endGame("won")
    }else if (guess > randomNumber){
        messageShown("Number you guess is Too High")
    }else if (guess < randomNumber){
        messageShown("Number you guess is Too Low")
    }
}

function messageShown(message){
    resultsPara.classList.add("showMessage")
    remaining.textContent = numberGuess
    PreviousGuessess.innerHTML = `${guesses}`
    lowOrHigh.textContent = message
}

function endGame(status){
    guessNum.value = ""
    guessNum.setAttribute("disabled","")
    playGame = false
    if (status =="won"){
        winStatus.textContent = "You won the Game Start again"
    }else{
        winStatus.textContent = `You loss the game the number is ${randomNumber} start again`
    }
    newGame()
}

function newGame(){
    const start = document.querySelector("#start")
    start.addEventListener("click",function(){
        numberGuess = 10 
        guesses = []
        guessNum.removeAttribute("disabled")
        resultsPara.classList.remove("showMessage")
        randomNumber = parseInt(Math.floor(Math.random()*100) + 1)
        console.log(randomNumber)
        winStatus.textContent = ""
        playGame = true
    })
}