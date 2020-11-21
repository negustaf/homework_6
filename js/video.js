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
slower.onclick = function setPlaySpeed() {
  video.playbackRate -= 0.1;
};
faster.onclick = function setPlaySpeed() {
  video.playbackRate += 0.1;
};
skip.onclick = function currentTime() {
	video.currentTime += 5;
};
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
