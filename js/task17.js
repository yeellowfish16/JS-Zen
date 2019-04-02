var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    // Для подсчета суммы квадратов используем функцию из задачи №12
    newElem.innerHTML = '<p>Сумма квадратов элементов массива: ' + sum(squareArrayElements(arr)) + '.</p> ' +
        '<p>Произведение квадратов элементов массива: ' + multiplyArrayElements(squareArrayElements(arr)) + '.</p>' +
        '<p>Произведение факториалов элементов массива: ' + multiplyArrayElements(factorialArrayElements(arr)) + '.</p>';
    document.getElementById('result').appendChild(newElem);
};

// Функция, возводящая элементы массива в квадрат
// @param arrArray - массив с элементами, сумму квадартов которых надо считать

function squareArrayElements(arrArray) {
    var arrNewArray = [];
    for (var i = 0; i < arrArray.length; i++) {
        arrNewArray[i] = arrArray[i] * arrArray[i];
    }
    return arrNewArray;
}

// Функция, возвращающая произведение элементов массива
// @param arrArray - массив с элементами, которые надо перемножить

function multiplyArrayElements(arrArray) {
    var multiplication = 1;

    for (i = 0; i < arrArray.length; i++) {
        multiplication *= arrArray[i];
    }

    return multiplication;
}

// Функция, возвращающая массив из факториалов элементов изначального массива
// @param arrArray - массив с элементами, факоториалы которых надо посчитать

function factorialArrayElements(arrArray) {
    var arrNewArray = [];
    for (i = 0; i < arrArray.length; i++) {
        // Для получения факториалов используем функцию из задачи №7
        arrNewArray[i] = calculateFactorial(arrArray[i]);
    }
    return arrNewArray;
}
