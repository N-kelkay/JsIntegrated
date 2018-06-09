var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruce = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");
var ben = document.getElementById("ben");
var benPic = document.getElementById("ben-pic");

simon.addEventListener("click", function () {
    if(simonPic.className == "hide"){
        simonPic.className = "";
    } else {
        simonPic.className = "hide";
    }
});

bruce.addEventListener("click", function () {
    if(brucePic.className == "hide"){
        brucePic.className = "";
    } else {
        brucePic.className = "hide";
    }
});

ben.addEventListener("click", function () {
    if(benPic.className == "hide"){
        benPic.className = "";
    } else {
        benPic.className = "hide";
    }
});

// simon.addEventListener("click", pickLink);
// bruce.addEventListener("click", pickLink);
// ben.addEventListener("click", pickLink);
//
// function pickLink() {
//
// }
