const cars = {
    one: document.getElementById("one"),
    two: document.getElementById("two"),
    three: document.getElementById("three"),
    four: document.getElementById("four"),
    five: document.getElementById("five"),
    six: document.getElementById("six"),
    seven: document.getElementById("seven")
}


// currently removing previously added class before adding them
// good for now. Will add function for this later
function driveInVert(carNumber){
    if(cars[carNumber].classList.contains("drive-in-vert")){
        cars[carNumber].classList.remove("drive-in-vert");
    }
    if(cars[carNumber].classList.contains("drive-out-vert")){
        cars[carNumber].classList.remove("drive-out-vert");
    }
    cars[carNumber].classList.add("drive-in-vert");
}
function driveInHoriz(carNumber){
    if(cars[carNumber].classList.contains("drive-in-horiz")){
        cars[carNumber].classList.remove("drive-in-horiz");
    }
    if(cars[carNumber].classList.contains("drive-out-horiz")){
        cars[carNumber].classList.remove("drive-out-horiz");
    }
    cars[carNumber].classList.add("drive-in-horiz");
}
function driveOutVert(carNumber){
    if(cars[carNumber].classList.contains("drive-in-vert")){
        cars[carNumber].classList.remove("drive-in-vert");
    }
    if(cars[carNumber].classList.contains("drive-out-vert")){
        cars[carNumber].classList.remove("drive-out-vert");
    }
    cars[carNumber].classList.add("drive-out-vert");
}
function driveOutHoriz(carNumber){
    if(cars[carNumber].classList.contains("drive-in-horiz")){
        cars[carNumber].classList.remove("drive-in-horiz");
    }
    if(cars[carNumber].classList.contains("drive-out-horiz")){
        cars[carNumber].classList.remove("drive-out-horiz");
    }
    cars[carNumber].classList.add("drive-out-horiz");
}

// special case for cars to drive in and out
function driveOutThenInVert(carNumber){
    driveOutVert(carNumber);
    cars[carNumber].addEventListener("animationend",(function handler(){
        driveInVert(carNumber);
        cars[carNumber].removeEventListener("animationend",handler)
    }));
}

// initially going to start the cars at number 0 then "draw" the appropriate number
// once we get the actual time. This allows us to show off our animations and lets us 
// know where each number will be since we'll start at 0.
function drawZero (){
    ["seven", "three"].forEach(driveInHoriz);
    ["one","two","four","six"].forEach(driveInVert);
}

// assuming 0 was there first then we would only need to these cars
function drawOne (){
    ["seven", "three"].forEach(driveOutHoriz);
    ["four","six"].forEach(driveOutVert);
}


function drawTwo(){
    driveOutVert("two");
    driveInVert("four");
    ["three", "five", "seven"].forEach(driveInHoriz);
}

// this is a special case where car 3 is in the way of car 2
// ignoring for now.
function drawThree(){
    driveOutVert("four");
    driveInVert("two");
}

function drawFour(){
    ["seven", "three"].forEach(driveOutHoriz);
    driveInVert("six");
}

function drawFive(){
    driveOutVert("one");
    ["three","seven"].forEach(driveInHoriz);

}
function drawSix(){
    driveInVert("four");
}
// special case because car 2 is in the way of car 1
function drawSeven(){
    ["four","six"].forEach(driveOutVert);
    driveOutThenInVert("two");
    driveOutHoriz("three");
    driveInVert("one");

}
function drawEight(){
    driveInHoriz("three");
    ["six","four"].forEach(driveInVert);
}
function drawNine(){
    driveOutVert("four");
}


// testing animations.
setTimeout(drawZero,5000);
setTimeout(drawOne,15000);
setTimeout(drawTwo,25000);
setTimeout(drawThree,35000);
setTimeout(drawFour,45000);
setTimeout(drawFive,55000);
setTimeout(drawSix,65000);
setTimeout(drawSeven,75000);
setTimeout(drawEight,95000);
setTimeout(drawNine,105000);