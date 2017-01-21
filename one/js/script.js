window.onload = function(){
	function playSound(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		console.log(audio);
		if(!audio) return; //stop the function from running all togeter
		audio.currentTime = 0; // rewind the start
		audio.play();
		key.classList.add('playing');
	}

	function removeTransition(e){
		if(e.propertyName !== 'transform') return; // skip if it's not a transform
		this.classList.remove('playing');
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend',removeTransition));
	window.addEventListener('keydown',playSound);

	// for click or touch
	keys.forEach(function(e){
		e.addEventListener('click', function(e2){
			keyCodeClick = e.getAttribute('data-key');
			const keyClick = document.querySelector(`audio[data-key="${keyCodeClick}"]`);
			const key = document.querySelector(`.key[data-key="${keyCodeClick}"]`);
			keyClick.play();
			key.classList.add('playing');
		})
	});
}
