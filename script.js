const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");

const intervalIds = [];
function zeroDriveIn(){
    clearIntervalAll();

}
const cars = {
    one: document.getElementById("one"),
    two: document.getElementById("two"),
    three: document.getElementById("three"),
    four: document.getElementById("four"),
    five: document.getElementById("five"),
    six: document.getElementById("six"),
    seven: document.getElementById("seven")
}

function driveInVert(carNumber){
    cars[carNumber].classList.add("drive-in-vert");
}
function driveInHoriz(carNubmer){
    console.log("carNumber", carNubmer)
    cars[carNubmer].classList.add("drive-in-horiz");
}
function driveOutVert(carNubmer){
    cars[carNubmer].classList.remove("drive-in-vert");
    cars[carNubmer].classList.add("drive-out-vert");
}
function driveOutHoriz(carNubmer){
    cars[carNubmer].classList.add("drive-out-horiz");
}

function drawZero (){
    ["seven", "three"].forEach(driveInHoriz);
    ["one","two","four","six"].forEach(driveInVert);
}
function drawOne (){
    ["seven", "three"].forEach(driveOutHoriz);
    ["four","six"].forEach(driveOutVert);
}

setTimeout(drawZero,5000);
setTimeout(drawOne,15000);

// for testing
function clearIntervalAll() {
    for (const id of intervalIds) {
        clearInterval(id);
    }
    intervalIds = [];
}