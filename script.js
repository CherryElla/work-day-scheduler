// Current time and day
setInterval(function () {
    let today = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#date").text(today);
}, 1000);

// Constants for HTML elements
const plannerForm = document.getElementById("planner-form");
const plannerInput = document.getElementsByClassName("planner-input");
const submitButton = document.getElementById("submit-button");
const savedNote = document.getElementById("notes");

// Entries array of objects with time and description keys
let entriesBlank = [
    { time: "9:00am", description: "" },
    { time: "10:00am", description: "" },
    { time: "11:00am", description: "" },
    { time: "12:00pm", description: "" },
    { time: "1:00pm", description: "" },
    { time: "2:00pm", description: "" },
    { time: '3:00 pm', description: "" },
    { time: '4:00 pm', description: "" },
    { time: '5:00 pm', description: "" },
];

// takes in a key and returns its value
function readLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// sets the value in local storage for the key
function writeLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// if there is not an entry in the local storage
let entries = readLocalStorage("entries");
if (!entries) {
    console.log("Nothing entered");
    entries = entriesBlank;
    writeLocalStorage("entries", entries)
}

// put the entries into the HTML
for (let i = 0; i < entries.length; i++) {
    addRow(i, entries[i]);
}





// Handling the button press/submit
function submitClicked(event) {
    console.log("clicked");
    console.log(event.target);
}

 // Inserting rows
function addRow(idx, entryObject) {
    let row = `
    <div class="col-xs-2 col-2">${entryObject.time}</div>
    <div id="eventText" class="col-xs-8 col-md-8">
        <form id="planner-form">
            <input 
                name="new-event"
                type="text" 
                class="planner-input w-100" 
                placeholder="Add note here" 
                value="${entryObject.description}">
        </form>
        <ul id="notes"></ul>
    </div>
    <div class="col-xs-2 col-2">
        <button id="btn-${idx}" 
            entryIndex="${idx}"
            type="button"
            class="btn btn-primary"
        >
            <img id="img-${idx}" 
            entryIndex="${idx}"
            src="submitImg.png"/>
        </button>
`;
    let mainContainer = document.querySelector("#main-container");
    let rowEl = document.createElement("div");
    rowEl.id = `entry-${idx}`;
    rowEl.classList = ["row"];
    rowEl.innerHTML = row;
    mainContainer.append(rowEl);

    let btnId = `#btn-${idx}`;
    let btn = document.querySelector(btnId);
    btn.addEventListener("click", submitClicked);
}



