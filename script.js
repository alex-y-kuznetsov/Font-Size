'use strict'

var heading = document.getElementById('heading');
var para = document.getElementById('paragraph');

var calcFontSize = function () {

	var headingWidth = Math.round(getComputedStyle(heading).width.slice(0, -2)); // текущая ширина
	var headingSize = +getComputedStyle(heading).fontSize.slice(0, -2); // размер h1
	var paraWidth = Math.round(getComputedStyle(para).width.slice(0, -2)); // ширина колонки

	if(headingWidth > paraWidth){
		for(var i=headingSize*10; headingWidth > paraWidth; --i){
			document.getElementById('heading').style.fontSize = i/10 + "px";
			paraWidth = Math.round(getComputedStyle(para).width.slice(0, -2)); // ширина колонки
			headingWidth = Math.round(getComputedStyle(heading).width.slice(0, -2)); // текущая ширина
		}
	}else{
		for(var i=headingSize*10; headingWidth < paraWidth; ++i){
			document.getElementById('heading').style.fontSize = i/10 + "px";
			paraWidth = Math.round(getComputedStyle(para).width.slice(0, -2)); // ширина колонки
			headingWidth = Math.round(getComputedStyle(heading).width.slice(0, -2)); // текущая ширина
		}
	}

	
}

calcFontSize();


// Математика сложно