var string = 'js',
    newString = string.toUpperCase();

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newString;
    document.getElementById('result').appendChild(newElem);
};
