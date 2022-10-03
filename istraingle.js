var inputAngle=document.querySelectorAll(".input-angle")
var traingleBtn=document.querySelector("#traingle-btn")
var output=document.querySelector("#output")

function calculatesumofAngles(angle1,angle2,angle3) {
var sumOfAngles= angle1 + angle2 + angle3
// console.log(sumOfAngles);
return sumOfAngles;
}

function isTraingle() {
var sumOfAngles = calculatesumofAngles(Number (inputAngle[0].value),Number (inputAngle[1].value),Number(inputAngle[2].value));
if (sumOfAngles === 180) {
    output.innerText = "Wow You Are Right, The angles form a Triangle"
} 
else {
    output.innerText= "oh no ! The angle dont form a Traiangle"
}
}

traingleBtn.addEventListener("click", isTraingle)