document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = findPositiveNumberInArray(fromStringToArray(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};


// Функция, возвращающая массив только с положительными элементами

function findPositiveNumberInArray(array) {
    var positiveArr = [];
    positiveArr = array.filter(function (number) {
        return isPositive(number);
    });
    return positiveArr;
}

// Функция, проверяющая положительное число или нет

function isPositive(number) {
    return number > 0 ? true : false;
}
