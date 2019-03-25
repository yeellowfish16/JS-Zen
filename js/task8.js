document.getElementById('check').onclick = function() {
	document.getElementById('result').innerHTML = '';
	var newElem = document.createElement('p');
	newElem.innerHTML = drawTriangle(6,'#');
	document.getElementById('result').appendChild(newElem);
};

// Рисуем треугольник из символов
// @param string (string) - количество строк - высота треугольника
// @param symbol - символ, которым будем рисовать треугольник

function drawTriangle(string, symbol) {
	var triangle = '';
	var triangleString = '';

	for (var i = 1; i <= string; i++) {
		triangleString += symbol;
		triangle += triangleString + '<br/>';
	}
	return triangle;
}
