document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = dayOfWeek(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, возвращающая день недели

function dayOfWeek(number) {
    var days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        result = '';

    switch (number) {
        case 1:
            result = days[0]
            break;
        case 2:
            result = days[1]
            break;
        case 3:
            result = days[2]
            break;
        case 4:
            result = days[3]
            break;
        case 5:
            result = days[4]
            break;
        case 6:
            result = days[6]
            break;
        case 7:
            result = days[7]
            break;
        default:
            result = 'Вы ввели что-то не то';
    }

    return result;
}
