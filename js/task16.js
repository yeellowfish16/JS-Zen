document.getElementById('check').onclick = function () {
    showTime();
}

// Функция показа времени

function showTime() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        newElem = document.createElement('p');

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    newElem.innerHTML = '<p> Текущее время: ' + hours + ':' + minutes +':' + seconds + '</p>';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').appendChild(newElem);

    setTimeout('showTime()',1000);
}
