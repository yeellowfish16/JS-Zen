document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = compareHalfOfNumber(document.getElementById('input').value);
    document.getElementById('result').appendChild(newElem);
};

// Функция для сравнения суммы первых цифр числа и последних

function compareHalfOfNumber(string) {
    var array = string.split(''),
        sum1 = 0,
        sum2 = 0;

    // Используем функци isEven из задачи 11
    if (!isEven(array.length)) {
        return 'В строке нечетное количество цифр';
    }

    for (var i = 0; i < array.length/2; i++) {
        sum1 += Number(array[i]);
    }

    for (var j = array.length/2; j < array.length; j++) {
        sum2 += Number(array[j]);
    }

    return sum1 == sum2 ? true : false;
}
