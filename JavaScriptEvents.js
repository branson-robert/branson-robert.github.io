var doc = document;

var jon = doc.getElementById("jonas");

jon.onclick= function(){
	doc.onmousemove = function(event){
		jon.style.position = 'fixed';
		jon.style.left = event.clientX + 'px';
		jon.style.top = event.clientY + 'px';
	}
}

doc.oncontextmenu = function() {
	doc.onmousemove = function(event){
		jon.style = '';
	}
	return false;
}


var moveEl = doc.getElementById('jonas');
moveEl.addEventListener('touchmove', function(event) {
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    moveEl.style.left = touch.pageX + 'px';
    moveEl.style.top = touch.pageY + 'px';
  }
}, false);
