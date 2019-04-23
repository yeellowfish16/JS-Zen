document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = getDigitsSumToOneDigit(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, считающая сумму цифр числа до однозначного числа

function getDigitsSumToOneDigit(number) {
    var array = String(number).split(''),
        sum = 0;

    array.forEach(function (item) {
        sum += Number(item);
    })

    if (sum > 9) {
        getDigitsSumToOneDigit(sum);
    }

    console.log(sum);

    return sum;
}
