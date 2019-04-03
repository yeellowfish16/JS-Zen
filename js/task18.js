document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    calculateTriangleSquare(0, 0, 0, 3,4,0);
    newElem.innerHTML = '<p>Площадь получившегося треугольника: ' +
        calculateTriangleSquare(
            parseInt(document.getElementById('input1').value),
            parseInt(document.getElementById('input2').value),
            parseInt(document.getElementById('input3').value),
            parseInt(document.getElementById('input4').value),
            parseInt(document.getElementById('input5').value),
            parseInt(document.getElementById('input6').value)
        ) +
        '. </p>';
    document.getElementById('result').appendChild(newElem);
};

// Функция, считающая площадь прямоугольного треугольника по коордианатам
// @param x1, y1, x2, y2, x3, y3 - (number) - координаты точек

function calculateTriangleSquare(x1, y1, x2, y2, x3, y3) {
    var a = Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))),
        b = Math.sqrt(((x3-x1)*(x3-x1))+((y3-y1)*(y3-y1))),
        c = Math.sqrt(((x3-x2)*(x3-x2))+((y3-y2)*(y3-y2))),
        p = (a + b + c)/2,
        square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return square;
}
