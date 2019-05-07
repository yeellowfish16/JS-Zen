var array = [4,2,5,19,13,0,10],
    sum = 0;

for (i=0; i < array.length; i++) {
    sum += Math.pow(array[i], 3);
}

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Квадратный корень из суммы кубов элемента данного массива: ' + Math.sqrt(sum) + '.';
    document.getElementById('result').appendChild(newElem);
};

