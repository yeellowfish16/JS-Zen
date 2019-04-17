var arr = ['Здоровенная', 'порция', 'сарказма', 'и', 'нецензурщины'],
    string = arr.join(' ');


document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = string;
    document.getElementById('result').appendChild(newElem);
};
