var familyJson = [
			{
				"FirstName":"Robert",
				"LastName":"Branson",
				"Sex":"Male",
				"Age":"51",

			},
			{
				"FirstName":"Laura",
				"LastName":"Branson",
				"Sex":"Female",
				"Age":"38",

			},
			{
				"FirstName":"Ashley",
				"LastName":"Weaver",
				"Sex":"Female",
				"Age":"29",

			},
			{
				"FirstName":"Kyle",
				"LastName":"Branson",
				"Sex":"Male",
				"Age":"27",

			},
			{
				"FirstName":"Grace",
				"LastName":"Finney",
				"Sex":"Female",
				"Age":"16",

			},
			{
				"FirstName":"Aidan",
				"LastName":"Finney",
				"Sex":"Male",
				"Age":"12",

			},
			{
				"FirstName":"Leif",
				"LastName":"Ross",
				"Sex":"Male",
				"Age":"12",

			},
			{
				"FirstName":"Jonas",
				"LastName":"Branson",
				"Sex":"Male",
				"Age":"2",

			},
		];


var i = 0;
var family = "";

function findMember() {

family = document.getElementById("familyName").value;

document.getElementById("message").innerHTML = "Please check your spelling and try again.";
document.getElementById("first").innerHTML = "<br>";
document.getElementById("last").innerHTML = "<br>";
document.getElementById("sex").innerHTML = "<br>";
document.getElementById("age").innerHTML = "<br>";


for (i = 0; i < familyJson.length; i++) {

	if	(familyJson[i].FirstName == family) {
		document.getElementById("message").innerHTML = "Here is some information about my family:"
		document.getElementById("first").innerHTML = "First name: <b>" + familyJson[i].FirstName + "</b>";
		document.getElementById("last").innerHTML = "Last name: <b>" + familyJson[i].LastName + "</b>";
		document.getElementById("sex").innerHTML = "Sex: <b>" + familyJson[i].Sex + "</b>";
		document.getElementById("age").innerHTML = "Age: <b>" + familyJson[i].Age + "</b>";
		} 
		
	}

}