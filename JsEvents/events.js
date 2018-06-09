var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");


/*
Javascript events:
- click
- mouseenter
- mouseleave
- mousedown
- mouseup
- mousemove
- keydown
- keyup
- blur
- focus
 */
numOne.addEventListener("input", add);
numTwo.addEventListener("click", add);

function add() {

    //ParseFloat changes it to a floating number
    var x = parseFloat(numOne.value) || 0;
    var y = parseFloat(numTwo.value) || 0;
    // var sum = x+y;
    addSum.innerHTML = "Your total is: " + (x + y);
}