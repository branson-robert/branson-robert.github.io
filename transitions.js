var doc = document;

moon.onclick = function() {
	var moon = doc.getElementById("moon");
	var day = doc.getElementById("day");
	
	if (moon.className == "getLighter") {
		day.className = "";
		moon.className = "";
	} else {
		day.className = "getDarker";
		moon.className = "getLighter";
	}
	
}
