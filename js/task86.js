var n = 1000;

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = divisionNum(n, 50);
    document.getElementById('result').appendChild(newElem);
};

// Функция для деления числа на 2 до достижения определенного результата
// @param num - число, которое делим
// @param limit - после какого числа остановиться

function divisionNum(n, limit) {
    var num = 0;

    while (n > limit) {
        num++;
        n /= 2;
    }
    return 'Получилось число ' + n + '. Количество итераций: ' + num + '.'
}
