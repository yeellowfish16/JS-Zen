document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = isLucky(document.getElementById('input').value);
    document.getElementById('result').appendChild(newElem);
};

// Функция для сравнения суммы первых трех цифр числа и последних трех

function isLucky(string) {
    var array = string.split(''),
        result = Number(array[0]) + Number(array [1]) + Number(array[2]) == Number(array [3]) + Number(array[4]) + Number(array[5]);

    return result ? 'Ура, твой билетик счастливый!' : 'Увы, может, повезет в следующий раз.'
}
