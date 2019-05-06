document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = whichQuarter(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, чтобы узнать в какой четверти часа находится число

function whichQuarter(min) {
    var result = '';

    if (min >= 0 && min < 15) {
        result = 'Это первая четверть часа.'
    }

    else if (min >= 15 && min < 30) {
        result = 'Это вторая четверть часа.'
    }

    else if (min >= 30 && min < 45) {
        result = 'Это третья четверть часа.'
    }

    else if (min >= 45 && min <= 59) {
        result = 'Это четвертая четверть часа.'
    }

    else {
        result = 'Вы ввели что-то не то';
    }

    return result;
}
