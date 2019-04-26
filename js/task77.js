document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Зеркальное время: ' + whatIsTheTime(document.getElementById('input').value);
    document.getElementById('result').appendChild(newElem);
};

// Функция, переворачивающая время на аналоговых часах зеркально
// @param time (string) - время в 12-часовом формате

function whatIsTheTime(time) {
    var SECONDS_IN_TWELVE_HOURS = 43200,
        timeArray = time.split(':'),
        timeInSeconds = Number(timeArray[0]) * 3600 + Number(timeArray[1]) * 60,
        leftTime = SECONDS_IN_TWELVE_HOURS - timeInSeconds;
        hours = Math.round(leftTime / 3600),
        mirrorMinutes = leftTime - (hours * 3600),
        minutes = mirrorMinutes / 60;

        if (minutes < 0) {
            hours--;
            minutes += 60;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (hours === 0) {
            hours = 12;
        }

        if (hours < 0) {
            hours += 12;
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        return hours + ':' + minutes;
}
