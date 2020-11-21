var video;
window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});
/* SLOW DOWN VIDEO BUTTON */
slower.onclick = function setPlaySpeed() {
  video.playbackRate -= 0.1;
};
/* SPEED UP VIDEO BUTTON */
faster.onclick = function setPlaySpeed() {
  video.playbackRate += 0.1;
};
/* SKIP 5 SECONDS VIDEO BUTTON */
skip.onclick = function currentTime() {
	video.currentTime += 5;
};
/* MUTE TOGGLE VIDEO BUTTON */
mute.onclick = function() {
	if (video.muted) {
		video.muted = false;
		mute.innerHTML = 'Mute';
	}
	else {
		video.muted = true;
		mute.innerHTML = 'unmute';
	}
};
/* VOLUME SLIDER VIDEO BUTTON */
var slider = document.getElementById('volumeSlider');
var output = document.getElementById('volume');
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
};
var setVolume = function(){
    video.volume = this.value / 100;
};
slider.addEventListener('change',setVolume);
slider.addEventListener('input',setVolume);

/* ADD GREYSCALE (.oldTime) CLASS TO VIDEO */
old.onclick = function() {
	video.classList.add('oldTime');
}
original.onclick = function() {
	video.classList.remove('oldTime')
}

/* HOW DO YOU ORGANIZE CODE IN JS LANGUAGE? */
