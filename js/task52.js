document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = findNumberInArray(fromStringToArray(document.getElementById('input').value), Number(document.getElementById('input1').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, возвращающая день недели

function findNumberInArray(array, number) {
    var result = '';

    for (var i=0; i < array.length; i++) {
        if (array[i] === number) {
            result = 'Да'
        }
        else {
            result = 'Нет'
        }
    }

    return result;
}

// Функция, превращающая введенную строку в массив чисел

function fromStringToArray(string) {
    var array = string.split(', ');

    for (var i=0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    return array;
}
