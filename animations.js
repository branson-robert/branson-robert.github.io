var doc = document;

function startBallAnimation() {
	var ballArray = doc.getElementsByClassName("ball");
	var ball = ballArray[0];
	ball.style.animation = "jump 10s linear infinite";
}
