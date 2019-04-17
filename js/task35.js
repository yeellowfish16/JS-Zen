var string = 'здоровенная порция сарказма и нецензурщины',
    arr = string.split(' ');

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}

string = arr.join(' ');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = string;
    document.getElementById('result').appendChild(newElem);
};
