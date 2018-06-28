function addOne() {
var food = document.getElementById("foodName").value;
var list = document.getElementById("topFoods");
var line = document.createElement("li");
var text = document.createTextNode(food);

line.appendChild(text);
list.insertBefore(line, list.childNodes[0]);	

document.getElementById("foodName").value = "";

}

function addNext() {
var food = document.getElementById("foodName").value;
var line = document.createElement("LI");
var newText = document.createTextNode(food);

line.appendChild(newText);
document.getElementById("topFoods").appendChild(line);
document.getElementById("foodName").value = "";
}

function deleteTop() {
var list = document.getElementById("topFoods");

list.removeChild(list.childNodes[0]);
document.getElementById("foodName").value = "";
}

function deleteLast() {
var i = 0;
var listLength = 0;
var list = document.getElementById("topFoods");

listLength = list.getElementsByTagName("li").length
list.removeChild(list.childNodes[(listLength + 1)]);
document.getElementById("foodName").value = "";
updateLocalStorage();

}

function deleteMyItem(listNumber) {
var list = document.getElementById("topFoods");

list.removeChild(list.childNodes[listNumber]);
document.getElementById("foodName").value = "";
}

function addMyItem(listNumber) {
var list = document.getElementById("topFoods");
var food = document.getElementById("foodName").value;
var line = document.createElement("LI");
var newText = document.createTextNode(food);

line.appendChild(newText);
list.insertBefore(line, list.childNodes[(listNumber)]);
document.getElementById("foodName").value = "";

}
