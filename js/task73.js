document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = digitToWord(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, возвращающая слово

function digitToWord(number) {
    var words = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'ноль'],
        result = '';

    switch (number) {
        case 1:
            result = words[0]
            break;
        case 2:
            result = words[1]
            break;
        case 3:
            result = words[2]
            break;
        case 4:
            result = words[3]
            break;
        case 5:
            result = words[4]
            break;
        case 6:
            result = words[5]
            break;
        case 7:
            result = words[6]
            break;
        case 8:
            result = words[7]
            break;
        case 9:
            result = words[8]
            break;
        case 0:
            result = words[9]
            break;
        default:
            result = 'Вы ввели что-то не то';
    }

    return result;
}
