// two global variables
var secondsRemaining;
var intervalHandle;
var timeDisplay = document.getElementById("time"); //defined at the top so that we can pull into multiple functions. This would allow us to make it appear or dissapear depending on the function called. 


function resetPage() {
    document.getElementById("inputTime").style.display = "block"; //input area shows again
    document.getElementById("time").style.display="none";
    document.getElementById("actionContainer").style.display="none";
}

function tick() {

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
//	if you put the display options up here like you see below, then it will cause the divs to jump and look weird, if you put them after the if/else statement, then the popup will appear before the div appears
//	document.getElementById("actionContainer").style.display="block"; // causes the pause and reset buttons to appear, have to put this before the counter appears or it won't appear until the counter runs out.
//	document.getElementById("time").style.display="block"; // causes the countdown timer to appear
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
	document.getElementById("resume").style.display="none"; //keeps the resume button from appearing
    document.getElementById("inputTime").style.display = "none";	// takes away the input information, this reappears when you hit the "reset" button
	document.getElementById("actionContainer").style.display="block"; // causes the pause and reset buttons to appear, have to put this before the counter appears or it won't appear until the counter runs out.
	document.getElementById("pause").style.display="block"; // ran into a bug where if you clicked the pause/resume buttons a bunch of times in succession and then the reset button, the pause button wouldn't appear when you started the time. Thats why I have called it specifically here. 
	document.getElementById("time").style.display="block"; // causes the countdown timer to appear
}

function pauseCountdown(){		//calls the pause button
	clearInterval(intervalHandle);		//clears the interval for "intervalHandle" which is like the "if" statement in "tick" without pulling up the alert
//	clearInterval() is an innate function in javaScript that clears the seconds interval for whatever function you put inside the "()"
//	intervalHandle = setInterval(tick, 0); this was the first "solution" to the pause button, but removes the 1 second tick and makes the numbers run out very quickly
//	document.getElementById("actionContainer").appendChild(pauseButton(value="Resume")); doesn't work to change button to "resume"
//	I ended up going with separate divs so that I could pull them by ID make it appear I was changing the button
//	document.getElementByName("pauseButton").style.display = "none";  // can't do display on the function so I had to put into separate divs I could reference. 
	document.getElementById("resume").style.display="block";  //reveals resume button
	document.getElementById("pause").style.display="none"; //removes pause button
	
}
function resumeCountdown() {
	intervalHandle = setInterval(tick,1000);
	document.getElementById("pause").style.display="block"; //shows pause button
	document.getElementById("resume").style.display="none"; //removes resume button
}

// as soon as the page is loaded...
window.onload =  function () {
    
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");

    // create the start countdown button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
   // create the pause button
    var pauseButton = document.createElement("input"); // must have "input" in the create element field to make a button as it is a type of input by the user
    pauseButton.setAttribute("type", "button");
    pauseButton.setAttribute("value", "Pause");
 //	pauseButton.setAttribute.innerHTML="pause"; doesn't put "pause" in the button....
    pauseButton.onclick = function() {
    	pauseCountdown();
    };
    //create the resume button
   var resumeButton = document.createElement("input");
   resumeButton.setAttribute("type", "button");
   resumeButton.setAttribute("value", "Resume");
   resumeButton.onclick = function(){
   	resumeCountdown();
   };
    // create the reset button
    var resetButton = document.createElement("input");
    resetButton.setAttribute("type", "button");
    resetButton.setAttribute("value", "Reset")
    resetButton.onclick = function(){
    	clearInterval(intervalHandle);
    	resetPage();
    };
    
    
    
    // add to the DOM, to the div called "inputTime"
    // the order that they are coded here affects the order that it appears on the page.
    document.getElementById("inputTime").appendChild(inputMinutes); //this is where the user puts in a number for minutes
    document.getElementById("inputTime").appendChild(startButton); //this is the start button
    document.getElementById("pause").appendChild(pauseButton); //assigning the control button to the "pause" ID
    document.getElementById("resume").appendChild(resumeButton); //assigning the reset button the to "resume" ID
    document.getElementById("reset").appendChild(resetButton); //assigning the reset button to the "reset" ID
    
};