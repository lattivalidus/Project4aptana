

function simpleAlert(){
	alert("Here is a simple alert window!");
}

function compAlert(){
	var betterWindow = window.open("", "New Browser Window", "width=300, height=300");
	betterWindow.document.write("This is more complicated");
	
	setTimeout(function(){ betterWindow.close() }, 3000);
}
// find a way to set the name of the window and maybe do something fun with it. Maybe do another example where they can't click on it.
 


// ----------------TIME SPENT ON PAGE TIMER-----------------------------------

var hr=0;
var min=0;
var sec=0;

function start(){

	if(hr<10){
		hr="0"+hr;
	}
	if(min<10){
		min="0"+min;
	}
	
	if(sec<10){
		sec="0"+sec;
	}
}

function ticker(){
	
		sec++;
		if(sec<10){
		sec="0"+sec;
		}
		if(sec==60){
			min++;
			if(min<10){
			min="0"+min;
			}
			if(min==60){
				hr++;
				if(hr<10){
				hr="0"+hr;
				}
			min=0+"0";
			}
			sec=0+"0";
		}
		document.getElementById("timeOnPage").innerHTML=hr+":"+min+":"+sec
}

var stopWatch=setInterval(function () {ticker()}, 1000); // causes the clock to run

window.onload=function(){
	start();
	ticker();
}

//------------Mouseclicks-------------------------------------

var clicks = 0;

document.getElementById("mouseClicks").innerHTML = "Mouseclicks :"+clicks;

document.onclick = function(){
    clicks ++;
    document.getElementById("mouseClicks").innerHTML = "Mouseclicks :"+clicks;
}               






