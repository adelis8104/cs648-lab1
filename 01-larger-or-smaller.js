var firstNum;
var secondNum;

firstNum = parseInt(window.prompt("Enter your First Number"));
secondNum = parseInt(window.prompt("Enter your Second Number"));
if(firstNum > secondNum){
    window.document.write("First number is Larger.");
} else if(firstNum < secondNum){
    window.document.write("Second number is Larger.");
} else if(firstNum == secondNum){
    window.document.write("The two numbers are equal.");
}