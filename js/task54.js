document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Для приведения строки с числами к массиву используем функцию из задачи №52
    newElem.innerHTML = compareNumberInArray(fromStringToArray(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, проверяющая, что в массиве есть одинаковые числа

function compareNumberInArray(array) {
    var result =  false;

    for (var i = 1; i < array.length; i++) {
        if (array[i] === array[i-1]) {
            result = true;
        }
    }

    if (!result) {
        return 'Нет';
    }

    return 'Да';
}
