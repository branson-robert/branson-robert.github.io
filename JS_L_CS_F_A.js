//While loop
function showOnDisplay() {
   document.getElementById("while").style.display = 'block'; 
}

function numberOfBoys() {
   var userNumber = document.getElementById("userInput").value;
   const pop = 10;
   let  boys = 0;
  while (boys < userNumber) {
	   boys++;
	}
   
   document.getElementById("result").innerHTML = "There's room for " + (pop - boys) + " more boys.";
}

//For loop
document.getElementById('btn').onclick = function(){
    var userNumber = parseInt(document.getElementById('input').value);
    var output = document.getElementById('results');
    output.innerHTML = '';
	
    for(var i = 0; i <= userNumber; i ++) {
        var item = document.createElement('div');
        item.innerHTML = i;
        output.appendChild(item);
    }
};



//Arrays
function showCars() {
   document.getElementById("cars").style.display = 'block';
}

function carNames(clickedButton) {
	var chevyCarNames = ['Spark', 'Sonic', 'Cruze', 'Malibu', 'Impala', 'Volt', 'Bolt EV', 'Camaro', 'Corvette'];
	var cadillacCarNames = ['ATS', 'CTS', 'XTS', 'CT6',];
	var buickCarNames = ['Regal', 'LaCrosse', 'Cascada'];
	var userChoice;
	var result = 'List of car models:<br><br>';
	
	switch (clickedButton) {
		case 'chevyButton':
			userChoice = chevyCarNames;
			break;
		case 'cadillacButton':
			userChoice = cadillacCarNames;
			break;
		case 'buickButton':
			userChoice = buickCarNames;
			break;
	
	}
	
	for (var i = 0; i < userChoice.length; i++) {
		result += userChoice[i] + "<br>";
	}
	
	document.getElementById("choiceOfMake").innerHTML = result;
}
