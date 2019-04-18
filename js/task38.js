var letters = ['a', 'b', 'c'];
letters.push(1, 2, 3);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = letters;
    document.getElementById('result').appendChild(newElem);
};
