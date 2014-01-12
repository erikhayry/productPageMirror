/*
	dummy gallery functionalty
 */

var containerEl = document.getElementById('large-image');


function loadMirror(){
	containerEl.classList.add('is-visible')
	initMirror();
}


var initMirror = function(){
	console.log('init mirror')
	console.clear();
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//get elements
var videoEl = document.querySelector('#js-video'),
    canvasEl = document.querySelector('#js-canvas'),
    canvasOverlayEl = document.querySelector('#js-canvas-overlay'),
    captureBtnEl = document.querySelector('#js-capture'),
    showVideoBtnEl = document.querySelector('#js-showVideo'),
    lightnessSliderEl = document.querySelector('#js-lightness'),
    colorEls = document.querySelectorAll('.js-color');
    
    //set variables
    ctx = canvasOverlayEl.getContext('2d'),
    localMediaStream = null,
    color = colorEls[0].dataset['color'];

function takeSnapshot() {
  if (localMediaStream) {
    ctx.drawImage(videoEl, 0, 0, 640, 360);
  }
}

//bind events
for (var i = 0; i < colorEls.length; i++) {
  colorEls[i].addEventListener('click', function(){
    	ctx.strokeStyle = color = this.dataset['color']
  }, false);
}

lightnessSliderEl.addEventListener('change', function(){
  canvasOverlayEl.style.opacity = this.value * 0.01;
});

captureBtnEl.addEventListener('click', function(){
  takeSnapshot();
  
  captureBtnEl.classList.add('is-hidden');
  videoEl.classList.add('is-hidden');
  
  showVideoBtnEl.classList.remove('is-hidden');
  canvasEl.classList.remove('is-hidden');
  canvasOverlayEl.classList.remove('is-hidden');
}, false);

showVideoBtnEl.addEventListener('click', function(){
  captureBtnEl.classList.remove('is-hidden');
  videoEl.classList.remove('is-hidden');
  
  showVideoBtnEl.classList.add('is-hidden');
  canvasEl.classList.add('is-hidden');
  canvasOverlayEl.classList.add('is-hidden');
}, false);

var vgaConstraints = {
  video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 360
    }
  }
};

navigator.getUserMedia(vgaConstraints, function(stream) {
    videoEl.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
}, function(){
});


/*
  drawing tool
*/
	
var sketch = document.querySelector('#js-canvas-overaly-holder');
	var sketch_style = getComputedStyle(sketch);
	canvasOverlayEl.width = 640;
	canvasOverlayEl.height = 360;

	var mouse = {x: 0, y: 0};
	 
	/* Mouse Capturing Work */
	canvasOverlayEl.addEventListener('mousemove', function(e) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - 170; //hardcoded header hight!
	}, false);
	
	/* Drawing on Paint App */
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = color;
	 
	canvasOverlayEl.addEventListener('mousedown', function(e) {
			ctx.beginPath();
			ctx.moveTo(mouse.x, mouse.y);
	 
			canvasOverlayEl.addEventListener('mousemove', onPaint, false);
	}, false);
	 
	canvasOverlayEl.addEventListener('mouseup', function() {
			canvasOverlayEl.removeEventListener('mousemove', onPaint, false);
	}, false);
	 
	var onPaint = function() {
			ctx.lineTo(mouse.x, mouse.y);
			ctx.stroke();
	};
}