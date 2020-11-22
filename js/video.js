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
	volume.innerHTML = (video.volume * 100) + '%';
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

/* ADVANCE 5 SECONDS BUTTON (PLUS RESTART ON CLICK AFTER REACHING END) */
function advance() {
	video.currentTime += 5;
	if (video.ended) {
		video.currentTime = 0;
		video.play();
	}
};

/* VIDEO MUTE BUTTON */
mute.onclick = function() {
	if (video.muted) {
		video.muted = false;
		mute.innerHTML = 'Mute';
	}
	else {
		video.muted = true;
		mute.innerHTML = 'Unmute';
	}
};

function greyscaleFilter() {
	video.classList.add('oldTime');
};
function noFilter() {
	video.classList.remove('oldTime');
};

/* VIDEO VOLUME SLIDER */
document.getElementById('volumeSlider').addEventListener('change', function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + '%';
});
