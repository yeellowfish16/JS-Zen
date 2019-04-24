document.getElementById('check').onclick = function () {
    getSecondsToTomorrow();
};

function getSecondsToTomorrow() {
    var nowTime = new Date(),
        newElem = document.createElement('p'),
        startNewDay = {},
        leftTime = 0;

    startNewDay = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate() + 1);
    leftTime = startNewDay - nowTime;

    newElem.innerHTML = 'До завтра осталось ' + Math.round(leftTime / 1000) + ' секунд.';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').appendChild(newElem);

    setTimeout('getSecondsToTomorrow()', 1000);
}
