document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Для приведения строки с числами к массиву используем функцию из задачи №52
    newElem.innerHTML = isPositive(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, проверяющая отрицательное число или нет

function isPositive(num) {
    return num > 0 ? true : false;
}
