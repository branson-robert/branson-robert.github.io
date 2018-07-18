// ****This is my canvas****
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var colorPallete = [
	"#BF0A30",
	"#002868",
	"#FFFFFF",
	];

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorPallete[Math.floor(Math.random()*4)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.color;
		c.stroke();

	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		this.dx = -this.dx;
		}
	if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
		this.dy = -this.dy;
		}
	this.x += this.dx;
	this.y += this.dy;

	this.draw();
	}

}
	var circleArray = [];

	for (var i = 0; i < 250; i++) {
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 4;
		var dy = (Math.random() - 0.5) * 4;
		var radius = 30;
		circleArray.push(new Circle(x, y, dx, dy, radius));
		}
var circle = new Circle(200, 200, 3, 3, 30);
function animateNow() {
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}


	}
animate();
}

// ****This is my spinner****
$( document ).ready(function() {
  $('.spinner-wrap').click(function() {

    var $this = $(this),
        audio = $this.siblings('audio')[0],
        bpm = Number($this.siblings('audio').data('bpm'))
        pulse = (60/bpm)*1000;


    if (audio.paused === false) {
      audio.pause();
      audio.currentTime = 0;
      $this.removeClass('playing');
      clearInterval(intervals);
    }

    else {
      audio.play();
      $this.addClass('playing');
      pulsing();
      intervals = setInterval(function() {pulsing()}, pulse);

    }


    function pulsing() {

      $this.addClass('pulse');

      setTimeout(function() {
        $this.removeClass('pulse');
      }, pulse-100);
    }
  });
});
