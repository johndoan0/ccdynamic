window.onload = function(){
	var currentTime = function(){
	// format current time
		var time = new Date();
		var displayHours = time.getHours();
		var displayMinutes = time.getMinutes();
		var displaySeconds = time.getSeconds();

		if(displayHours < 10){
			displayHours = '0' + displayHours
		}
		if(displayMinutes < 10){
			displayMinutes = '0' + displayMinutes
		}
		if(displaySeconds < 10){
			displaySeconds = '0' + displaySeconds
		}
		
		displayTime = displayHours + ":" + displayMinutes + ":" + displaySeconds
		
		return displayTime
	}

	var clockContainer = document.getElementById('clock-container')
	var timediv = document.getElementById('time')
	var hexdiv = document.getElementById('hex')
	var progBar = document.getElementById('pbar')

//================= HTML

	var displayCurrentTime = function(){
	//HTML to display time
		timediv.innerHTML = '<p>' + currentTime() + '</p>'
	}

	var hexHtml = function(){
	//HTML for hex value
		hexdiv.innerHTML = '<p>' + timeintohex() + '</p>'
	}

//================= COLOR STOPS

	var timeintohex = function(){
	//changes time into hex value, 1st color stop
		var cTnocolon = currentTime().replace(/:/gi,'')
		var cThex = '#' + cTnocolon
		return cThex
	}

	var cTimeSecondColorStop = function(){
	//make 2nd color stop
		var hexnohash = timeintohex().slice(1)
		var cTint = parseInt(hexnohash) * 4
		var cTstr = cTint.toString()
		while (cTstr.length < 6){
		//if cTint is < #000000
			cTstr = '0' + cTstr
		}
		cTstr = '#' + cTstr
		return cTstr
	}

//================= BACKGROUND COLOR
	
	var BackgroundChange = function(){
	//make background change according hexHtmlNoDiv()
		clockContainer.style.background = "radial-gradient(ellipse, " + timeintohex()
		 + ", " + cTimeSecondColorStop() + ")"

	}

//================= PROGRESS BAR

	var pBar = function(){
	//progress bar changes with time
		var time = new Date();
		var seconds = time.getSeconds();
		progBar.style.width = seconds * 4 + "px"
	}

	setInterval(displayCurrentTime, 1000)
	setInterval(hexHtml, 1000)
	setInterval(BackgroundChange, 1000)
	setInterval(pBar, 1000)
}