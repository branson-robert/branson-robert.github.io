var doc = document;

function swapStyleSheetDefault(){
	doc.body.style.backgroundColor = '';
	doc.getElementById("code").style.color = '#000';
	doc.getElementById("jst").style.color = '#000';
}

function swapStyleSheetGray(){
	doc.body.style.backgroundColor = '#808080';
	doc.getElementById("code").style.color = '#4B9CD3';
	doc.getElementById("jst").style.color = '#fff';
}

function swapStyleSheetBlack(){
	doc.body.style.backgroundColor = '#000';
	doc.getElementById("code").style.color = '#fff';
	doc.getElementById("jst").style.color = '#FFFF00';
}
