var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll('li');
var inputs = checklist.querySelectorAll('input');


for(var i =0; i <items.length; i++){
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeyPress);
}

/**
 * This function allows the user to input a value in the already constructed spans
 */
function editItem() {
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();

    //Highlights the text when clicked
    input.setSelectionRange(0, input.value.length);
}

/**
 * This function blurs the text space after the user has finished typing
 */
function updateItem() {
this.previousElementSibling.innerHTML = this.value;
this.parentNode.className = "";
}

/**
 * Allows the enter key to updateItem
 * @param event
 */
function itemKeyPress(event) {
    if(event.which == 13){
        updateItem.call(this);
    }
}