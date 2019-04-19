document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = findNumberInArray(fromStringToArray(document.getElementById('input').value), Number(document.getElementById('input1').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, возврашающая результат поиска по массиву

function findNumberInArray(array, number) {
    var result = array.some(function (item) {
        return item === number;
    });

    if (!result) {
        return result = 'Нет';
    }

    return result = 'Да';
}

// Функция, превращающая введенную строку в массив чисел

function fromStringToArray(string) {
    var array = string.split(', '),
        numbers = array.map(function (item) {
            return Number(item);
        });

    return numbers;
}
