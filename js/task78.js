document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Для приведения строки с числами к массиву используем функцию из задачи №52
    newElem.innerHTML = compareNumbersInArrays(fromStringToArray(document.getElementById('input').value), fromStringToArray(document.getElementById('input1').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, ищущая в массивах одинаковые элементы

function compareNumbersInArrays(array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                result.push(array1[i]);
            }
        }
    }

    return result;
}
