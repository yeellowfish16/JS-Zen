var days = 365,
    planet = 'Земля',
    people = '7 млрд.',
    star = 'Солнце';

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'В нашем году ' + days + ' дней. Днём у нас светит ' + star + '. Население планеты ' + planet + ' составляет примерно ' + people + ' человек.';
    document.getElementById('result').appendChild(newElem);
};
