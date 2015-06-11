// two global variables
var secondsRemaining;
var intervalHandle;

function resetPage() {
    document.getElementById("inputArea").style.display = "block"; //input area shows again
}

function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60); //.floor is used in place of .round or .remainder because we are ignoring anything that is not the main number for the minutes portion
    var sec = secondsRemaining - (min * 60); // this is to calculate the seconds only
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec; // uses "0" as a string so that we get "09", "08", "07", etc....
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle); //stops the counter
        resetPage(); //resets the page so that you can enter a number again
    }
    // subtract from seconds remaining
    secondsRemaining--;
}

function startCountdown() {
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
    // check if not a number
    if (isNaN(minutes)) {
       alert("Gotta have numbers cap'n");
        return;
    }
    //check if anything was entered at all
    else if (minutes==""){
    	alert("This doesn't work if you don't enter a number :)");
    	return;
    }
    // how many seconds?
    secondsRemaining =  minutes * 60;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
//    document.getElementById("inputArea").style.display = "none";		Can use this line to make the button go away
}

//////////function pauseCountdown() {
	//find a way to pause countdown	
//////////};

// as soon as the page is loaded...
window.onload =  function () {
    
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");

    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
   // creating a pause button
    var controlButton = document.createElement("input"); // must have "input" in the create element field to make a button as it is a type of input by the user
    controlButton.setAttribute("type", "button");
    controlButton.setAttribute("value", "Pause");
    controlButton.onclick = function() {
    	pauseCountdown();
    };
   
    
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes); //this is where the user puts in a number for minutes
    document.getElementById("inputArea").appendChild(startButton); //this is the start button
    document.getElementById("startStop").appendChild(controlButton); //assigning the control button to the "startStop" ID so that it appears on the screen
};