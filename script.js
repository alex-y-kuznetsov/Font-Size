'use strict'

var heading = document.getElementById('heading');
var para = document.getElementById('paragraph');

var calcFontSize = function () {
	var currentParaWidth = para.offsetWidth + 'px';
	heading.style.fontSize = '300px';
	heading.style.width = currentParaWidth;
	var headingSize = +heading.style.fontSize.slice(0, -2);
	var paraSize = +currentParaWidth.slice(0, -2);

	while (headingSize > paraSize) {
		headingSize --;
	}

	while (headingSize < paraSize) {
		headingSize ++;
	}

	heading.style.fontSize = headingSize + 'px';
}

calcFontSize();


// Сложение мух с котлетами. Как перевести длину параграфа в размер шрифта заголовка?