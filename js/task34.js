var string = 'здоровенная порция сарказма и нецензурщины';

string = string[0].toUpperCase() + string.slice(1);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = string;
    document.getElementById('result').appendChild(newElem);
};
