document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Для приведения строки с числами к массиву используем функцию из задачи №52
    newElem.innerHTML = compareSum(Number(document.getElementById('input').value), Number(document.getElementById('input1').value), Number(document.getElementById('input2').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, сравнивающая сумму чисел с третьим числом

function compareSum(num1, num2, num3) {
    return (num1 + num2) > num3 ? true : false;
}
