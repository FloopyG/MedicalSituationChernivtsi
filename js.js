var fontButton1 = document.querySelector('.fontSizeButton1');
var fontButton2 = document.querySelector('.fontSizeButton2');
var fontButton3 = document.querySelector('.fontSizeButton3');
var fontButton4 = document.querySelector('.fontSizeButton4');
var mainText = document.querySelector('.mainText');




fontButton1.onclick = function () {
	mainText.style.fontSize = '14px';
	fontButton2.style.color = 'white'
	fontButton3.style.color = 'white'
	fontButton4.style.color = 'white'
	fontButton1.style.color = 'rgba(129, 207, 224, 1)';
};

fontButton2.onclick = function () {
	mainText.style.fontSize = '18px';
	fontButton1.style.color = 'white'
	fontButton3.style.color = 'white'
	fontButton4.style.color = 'white'
	fontButton2.style.color = 'rgba(129, 207, 224, 1)';
};
fontButton3.onclick = function () {
	mainText.style.fontSize = '24px';
	fontButton1.style.color = 'white'
	fontButton2.style.color = 'white'
	fontButton4.style.color = 'white'
	fontButton3.style.color = 'rgba(129, 207, 224, 1)';
};
fontButton4.onclick = function () {
	mainText.style.fontSize = '36px';
	fontButton1.style.color = 'white'
	fontButton3.style.color = 'white'
	fontButton2.style.color = 'white'
	fontButton4.style.color = 'rgba(129, 207, 224, 1)';
};