// Current time and day
setInterval(function () {    
    let today = moment().format("MMMM Do YYYY, h:mm:ss a")   
    $("#date").text(today) ;
}, 1000)


const plannerForm = document.getElementById("planner-form");
const plannerInput = document.getElementsByClassName("planner-input");
const plannerSubmit = document.getElementById("submit-button");
const plannerSavedNote = document.getElementById("notes");



// Function for the lock button
function saveEventEntered (event) {

}

// Event listeners for the lock button press
let allLockButtons = document.querySelector("#padlock").addEventListener("click", saveEventEntered)