var video;
window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});
document.querySelector("#pause").addEventListener("click", function() {
});

document.getElementById('play').addEventListener('click', playVideo);
document.getElementById('pause').addEventListener('click', pauseVideo);
document.getElementById('slower').addEventListener('click', decreaseSpeed);
document.getElementById('faster').addEventListener('click', increaseSpeed);
document.getElementById('skip').addEventListener('click', advance);
document.getElementById('mute').addEventListener('click', mute);
document.getElementById('old').addEventListener('click', greyscaleFilter);
document.getElementById('original').addEventListener('click', noFilter);

function playVideo() {
  video.play();
};
var video;
window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});
document.querySelector("#pause").addEventListener("click", function() {
});

document.getElementById('play').addEventListener('click', playVideo);
document.getElementById('pause').addEventListener('click', pauseVideo);
document.getElementById('slower').addEventListener('click', decreaseSpeed);
document.getElementById('faster').addEventListener('click', increaseSpeed);
document.getElementById('skip').addEventListener('click', advance);
document.getElementById('mute').addEventListener('click', mute);
document.getElementById('old').addEventListener('click', greyscaleFilter);
document.getElementById('original').addEventListener('click', noFilter);

function playVideo() {
  video.play();
};
function pauseVideo() {
	video.pause();
};
function decreaseSpeed() {
	video.playbackRate -= 0.1;
};
function increaseSpeed() {
	video.playbackRate += 0.1;
};
function advance() {
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
function greyscaleFilter() {
	video.classList.add('oldTime');
};
function noFilter() {
	video.classList.remove('oldTime');
};

function greyscaleFilter() {
	video.classList.add('oldTime');
};
function noFilter() {
	video.classList.remove('oldTime');
};

/* VIDEO VOLUME SLIDER */
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
