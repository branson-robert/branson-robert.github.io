	function circleRed() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	
	ctx.beginPath();
//	ctx.fillStyle = "#808080";
	ctx.strokeStyle = "#ff0000";
	ctx.lineWidth = 10;
	ctx.arc(370, 205, 50, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();
	}
	function circleBlue() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	
	ctx.beginPath();
	//ctx.fillStyle = "#808080";
	ctx.strokeStyle = "#3e76ec";
	ctx.lineWidth = 10;
	ctx.arc(120, 205, 50, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();
	}
	function circleBlack() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	
	ctx.beginPath();
	//ctx.fillStyle = "#808080";
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 10;
	ctx.arc(245, 205, 50, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();
	}
	function circleYellow() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	
	ctx.beginPath();
	//ctx.fillStyle = "#808080";
	ctx.strokeStyle = "#ffce01";
	ctx.lineWidth = 10;
	ctx.arc(180, 255, 50, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();
	}
	function circleGreen() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	
	ctx.beginPath();
	//ctx.fillStyle = "#808080";
	ctx.strokeStyle = "#179a13";
	ctx.lineWidth = 10;
	ctx.arc(305, 255, 50, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.stroke();
	}
