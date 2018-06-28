var per;

function createPerObject() {
	per = new Object();
	document.getElementById("perObject").style.display = 'block';
}

function seeObjectProperties(date, name, weight, age) {
	
	// set object properties
	per.date = date;
	per.name = name;
	per.weight = weight;
	per.age = age;
	
	// display to user
	displayObjectProperties(per, "per");
	
}

function displayObjectProperties(obj, objName) {
  var showProperties = "";
  for (var i in obj) {
    showProperties += objName + "." + i + " = " + obj[i] + "<br>";
  }
  
  showProperties += '<br>' + obj.name + ' is ' + obj.age + ' years old and weighs ' + obj.weight + 'lbs on ' + obj.date;
  
  document.getElementById("objectDisplay").innerHTML = showProperties;
}

var Top;
var Tombstone;
var Ferris;

function createDvdObjects() {
	function Dvd(name, cost, availability) {
	   this.name = name;
	   this.cost = cost;
	   this.availability = availability;
	   this.checkAvailability = function() {
		  return this.name + ' is available for '+ this.cost + ' on '+ this.availability;
		};
	}

	Top = new Dvd('Top Gun', '$22.99', 'Wednesday, 6/27/18.');
	Tombstone = new Dvd('Tombstone', '$19.99', 'Thursday, 6/28/18.');
	Ferris = new Dvd('Ferris Bueller', '$21.99', 'Monday, 7/2/18.');
	
	document.getElementById("dvdObjects").style.display = 'block';
}

function checkAvailability(dvd) {
	var showAvailability = '';
	switch (dvd) {
		case 'top':
			showAvailability = Top.checkAvailability();
			break;
		case 'tombstone':
			showAvailability = Tombstone.checkAvailability();
			break;
		case 'ferris':
			showAvailability = Ferris.checkAvailability();
			break;
	}
	
	document.getElementById("availabilityDisplay").innerHTML = showAvailability;
}