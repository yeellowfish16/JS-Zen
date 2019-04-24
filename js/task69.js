document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Испооьзуем функцию из задачи №52 для превращения строки в массив
    newElem.innerHTML = 'Среднее арифметическое этого массива: ' + findAverage(fromStringToArray(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, ищущая среднее арифметическое

function findAverage(array) {
    var sum = 0,
        average = 0;

    array.forEach(function (item) {
        return sum += item;
    });

    return average += sum / array.length;
}
