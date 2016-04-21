window.onload = function(){
	var currentTime = function(){
		// formatted current time
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
	

	var displayCurrentTime = function(){
	//display currentTime() onto page
		var TickTockadd = function(){
		//add time div and remove at 1 sec
			var timeNow = document.createElement('div')
			timeNow.textContent = currentTime()
			clockContainer.appendChild(timeNow)	
			var TickTockremove = function(){
			//remove time div
				clockContainer.removeChild(timeNow)	
			}
			setTimeout(TickTockremove, 1000)
		}	
		setTimeout(TickTockadd, 1000) 
	}

	var cTimeintoHex = function(){
	//convert currentTime() into a hex value AND make div dynamic
		//remove : from string
		var cTnocolon = currentTime().replace(/:/gi,'')
		//format ctnocolon with #
		var cThex = '#' + cTnocolon
		//change cThex dyanamic with time
		var hexOn = function(){
			var tHex = document.createElement('div')
			tHex.textContent  = cThex
			clockContainer.appendChild(tHex)
			var hexOff = function(){
				clockContainer.removeChild(tHex)	
			}
			setTimeout(hexOff, 1000)
		}
		setTimeout(hexOn, 1000)
		return cThex
	}

	var cTimeFirstColorStop = function(){
	//1st color stop in gradient
		var cTnocolon = currentTime().replace(/:/gi,'')
		var cThexstop = '#' + cTnocolon
		return cThexstop
	}

	var cTimeSecondColorStop = function(){
	//make 2nd color stop that changes with currentTime()
		var cTnocolon = currentTime().replace(/:/gi,'')
		//string to int
		var cTint = parseInt(cTnocolon) * 4
		var cTstr = cTint.toString()
		while (cTstr.length < 6){
		//if cTint is < 000000
			cTstr = '0' + cTstr
		}
		cTstr = '#' + cTstr
		return cTstr
	}
	
	var BackgroundChange = function(){
	//make background change according cTimeintoHexNoDiv()
		// clockContainer.style.background = cTimeintoHexNoDiv()
		clockContainer.style.background = "radial-gradient(ellipse, " + cTimeFirstColorStop()
		 + ", " + cTimeSecondColorStop() + ")"

	}


	setInterval(displayCurrentTime, 1000)
	setInterval(cTimeintoHex, 1000)
	setInterval(BackgroundChange, 1000)
}