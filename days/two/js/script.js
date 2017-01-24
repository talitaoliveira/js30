window.onload = function(){
	const secondHand = document.querySelector('.second-hand');
	const minsHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	const buttonInvertColors = document.querySelector('button');

	function setDate(){
		const now = new Date();
		// seconds
		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;
		//console.log("seconds: " + seconds);
		//console.log("secondsDegrees: " + secondsDegrees);
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		secondHand.innerHTML = `<div class="numeros" style="transform:rotate(-${secondsDegrees}deg)">${seconds}s</div>`;

		// minutes
		const mins = now.getMinutes();
		const minsDegrees = ((mins / 60) * 360) + 90;
		//console.log("mins: " + mins);
		//console.log("minsDegrees: " + minsDegrees);
		minsHand.style.transform = `rotate(${minsDegrees}deg)`;
		minsHand.innerHTML = `<div class="numeros" style="transform:rotate(-${minsDegrees}deg)">${mins}m</div>`;
		// hour
		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360) + 90;
		//console.log("hour: " + hour);
		//console.log("hourDegrees: " + hourDegrees);
		hourHand.style.transform = `rotate(${hourDegrees}deg)`;
		hourHand.innerHTML = `<div class="numeros" style="transform:rotate(-${hourDegrees}deg)">${hour}h</div>`;

	}

	setInterval(setDate, 1000);

	buttonInvertColors.addEventListener('click', invertColors);

	function invertColors(){
		var corPadraoRelogio = "#254354";
		var corPadraoBackground = "#E2C044";

		var body = document.querySelector('body');
		var clock = document.querySelector('.clock');
		var title = document.querySelector('h1');
		var numeros = document.querySelector('.numeros');
		
		body.style.backgroundColor = corPadraoRelogio;
		clock.style.borderColor = corPadraoBackground;
		title.style.color = corPadraoBackground;
		//numeros.style.color = corPadraoBackground;

		numeros.style.setProperty(`--relogio`, corPadraoBackground);

	}

}