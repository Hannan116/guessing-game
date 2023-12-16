// variable initilization

var attempts=0;
 var totalAttempts=5;
var  totalWon=0;
var totalLost=0;

// finding element 
const cardElement=document.querySelector(".card");

const form=document.querySelector("form")
const guessingNumber=form.querySelector(".guessing-number")
//  console.log(inputElement)
const checkbutton=form.querySelector("#checkbutton");
// console.log(checkbutton)

const testResult=document.querySelector(".test-result");
// console.log(testResult)
const remainingAttempts=document.querySelector(".remaining-attempts");

// creating won or lost element 
const lostWonMessage= document.createElement("p");


form.addEventListener("submit", function(event){
   event.preventDefault ();
    // console.log(guessingNumber.value);
    let guessNumber=Number(guessingNumber.value);
    checkresult(guessNumber);
    attempts++;
    if (attempts>totalAttempts-1) {
        guessingNumber.disabled=true;
        checkbutton.disabled=true;
    } else {
        remainingAttempts.innerHTML=`Remaining attempts: ${totalAttempts-attempts}`
    }
    guessingNumber.value="reset";

})
function checkresult(value){
    // if(totalAttempts>0) {

        
    // }
    const randomNumber=getRandomNumber(5);
    
    if(value==randomNumber) {
        testResult.innerHTML=`You Won`
        totalWon ++;
    } else {
        testResult.innerHTML=`You have lost. Random number was: ${randomNumber}`;
        totalLost ++;
    }
    lostWonMessage.innerHTML=`Won: ${totalWon}, Lost: ${totalLost}`
    lostWonMessage.classList.add("large");
    cardElement.appendChild(lostWonMessage)
   
}
function getRandomNumber(limit) {
    return  Math.floor(Math.random()*limit+1);
    
}
