document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = isNumberSimple(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, проверяющая простое число или нет

function isNumberSimple(number) {
    var result = false;

    for (var i=2; i < number; i++) {
        if (number % i == 0) {
            result = true;
        }
    }

    return result;
}
