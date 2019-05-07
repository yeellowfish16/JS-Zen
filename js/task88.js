var array = [4, 2, 5, 19, 13, 0, 10];

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Квадратный корень из суммы кубов элемента данного массива: ' + squareFromSumOfArrayPow(array, 3) + '.';
    document.getElementById('result').appendChild(newElem);
};


// Функция, считающая корень из суммы элементов массива, возведенных в степень
// @param array - массив
// @param pow - (num) в какую степень возводим элементы

function squareFromSumOfArrayPow(array, pow) {
    var sum = 0;

    for (i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], pow);
    }

    return Math.sqrt(sum);
}

