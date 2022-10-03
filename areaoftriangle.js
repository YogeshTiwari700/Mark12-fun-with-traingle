var sideInput = document.querySelectorAll(".side-input");
var areaBtn = document.querySelector("#check-area-btn");
var outPut = document.querySelector("#output");

function calculateOfMultiplySide(a,b) {
    var multiplyOfSide = a*b
    return multiplyOfSide;
}


function areaOfTriangle () {
    var multiplyOfSide = calculateOfMultiplySide(Number (sideInput[0].value),Number (sideInput[1].value));
    var checkAreaOfTriangle = Math.floor(multiplyOfSide/2);
    outPut.innerText= "The Area Of a Triangle Is " + checkAreaOfTriangle;

}

areaBtn.addEventListener("click", areaOfTriangle);