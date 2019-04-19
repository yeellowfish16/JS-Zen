document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Для приведения строки с числами к массиву используем функцию из задачи №52
    newElem.innerHTML = compareNumbers(Number(document.getElementById('input').value), Number(document.getElementById('input1').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, сравнивающая числа

function compareNumbers(num1, num2) {
    return num1 === num2 ? true : false;
}
