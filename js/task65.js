document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Числа, на которые это число делится без остатка: ' + getDivisors(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, для получения делителей числа

function getDivisors(number) {
    var arr = [],
        resultArr = [];

    for (var i = 0; i < number; i++) {
        arr.push(number - i);
    }

    resultArr = arr.filter(function (item) {
        return number % item === 0;
    });

    return resultArr;
}
