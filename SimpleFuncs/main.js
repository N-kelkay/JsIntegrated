

var myList = ["apples", "banana", "oranges"];

//Goes through each index and runs the function for each value
myList.forEach(function (value, index) {
    console.log(value, index);
});

//shift takes out the first index and returns it
myList.shift();

//pop takes out the last index and returns it
myList.pop();


//Loops

var x = 0;
while (x<10) {
    console.log("Tried it " + x);
    x++;
}

x = 0;
//Do while does the process at least once, then checks if it is valid
do {
    console.log("Tried it " + x);
    x++;
}while (x < 10);

