document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Испооьзуем функцию из задачи №52 для превращения строки в массив
    newElem.innerHTML = 'Сумма квадратов элементов этого массива: ' + findSumOfSquares(fromStringToArray(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, возвращающая сумму квадратов элементов

function findSumOfSquares(array) {
    var sum = 0;

    array.forEach(function (item) {
        return sum += Math.pow(item, 2);
    });

    return sum;
}
