var square = Math.sqrt(587),
    object = {
        floor: Math.floor(square),
        ceil: Math.ceil(square)
    }

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = '<p>Округление в меньшую сторону: ' + object.floor +
                        '.</p> <p>Округление в большую сторону: ' + object.ceil + '.</p>';
    document.getElementById('result').appendChild(newElem);
};
