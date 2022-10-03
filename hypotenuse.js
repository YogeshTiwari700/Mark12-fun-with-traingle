var sideInput=document.querySelectorAll(".side-input");
var hypotenuseBtn=document.querySelector("#hypotenuse-btn");
var output=document.querySelector("#output");

function calculateSumOfSquares(a,b) {
    var sumOfSquares = a**2 + b**2
    // console.log(sumOfSquares)
    return sumOfSquares;
}


function calculateHypotenuse() {
    var sumOfSquares=calculateSumOfSquares(Number (sideInput[0].value),Number (sideInput[1].value));
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    // console.log(lengthOfHypotenuse);
    output.innerText = "WoW The Length Of Hypotenuse is " + lengthOfHypotenuse;
} 

hypotenuseBtn.addEventListener("click",calculateHypotenuse);