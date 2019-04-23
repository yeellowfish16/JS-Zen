document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = getDigitsSum(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, считающая сумму цифр числа

function getDigitsSum(number) {
    var array = String(number).split(''),
        sum = 0;
    array.forEach(function (item) {
        sum += Number(item);
        return sum;
    })
    return sum;
}
