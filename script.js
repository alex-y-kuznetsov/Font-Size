'use strict'

var heading = document.getElementById('heading');
var para = document.getElementById('paragraph');
heading.style.fontSize = '300px';

var calcFontSize = function () {

	var headingWidth = Math.round(getComputedStyle(heading).width.slice(0, -2));
	var headingSize = +getComputedStyle(heading).fontSize.slice(0, -2);
	var paraWidth = Math.round(getComputedStyle(para).width.slice(0, -2));

	var headingToSmall = function () {
		while (headingWidth > paraWidth) {
			headingWidth--;
			headingSize = headingWidth / 4;
		}
		console.log(headingSize);
		heading.style.width = headingWidth + 'px';
		return headingSize;
	}

	var headingToLarge = function () {
		while (headingWidth < paraWidth) {
			headingWidth++;
			headingSize++;
		}
		return headingSize;
	}

	if (headingWidth > paraWidth) {
		headingToSmall();
		console.log('heading larger');
	} else {
		headingToLarge();
		console.log('heading smaller')
	}

	heading.style.fontSize = headingSize + 'px';
}

calcFontSize();


// Математика сложно