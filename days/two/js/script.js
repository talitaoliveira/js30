window.onload = function(){
	const secondHand = document.querySelector('.second-hand');
	const minsHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	function setDate(){
		const now = new Date();
		// seconds
		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;
		//console.log("seconds: " + seconds);
		//console.log("secondsDegrees: " + secondsDegrees);
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		secondHand.innerHTML = `<div style="font-size:2em;color:#254354;position:fixed;margin-right: 10px;transform:rotate(-${secondsDegrees}deg)">${seconds}s</div>`;


		// minutes
		const mins = now.getMinutes();
		const minsDegrees = ((mins / 60) * 360) + 90;
		//console.log("mins: " + mins);
		//console.log("minsDegrees: " + minsDegrees);
		minsHand.style.transform = `rotate(${minsDegrees}deg)`;
		minsHand.innerHTML = `<div style="font-size:2em;color:#254354;position:fixed;margin-right: 10px;transform:rotate(-${minsDegrees}deg)">${mins}m</div>`;
		// hour
		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360) + 90;
		//console.log("hour: " + hour);
		//console.log("hourDegrees: " + hourDegrees);
		hourHand.style.transform = `rotate(${hourDegrees}deg)`;
		hourHand.innerHTML = `<div style="font-size:2em;color:#254354;position:fixed;margin-right: 10px;transform:rotate(-${hourDegrees}deg)">${hour}h</div>`;

	}


	setInterval(setDate, 1000);
}