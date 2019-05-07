var square = Math.sqrt(379);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = '<p>Квадратный корень из 379 с округлением до целого: ' + Math.round(square) +
                        '.</p> <p>Квадратный корень из 379 с округлением до десятых: ' + Math.round(square*10)/10 +
                        '.</p> <p>Квадратный корень из 379 с округлением до сотых: ' + Math.round(square*100)/100 + '.</p>';
    document.getElementById('result').appendChild(newElem);
};
