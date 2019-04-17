var string = 'kjsahhashu bbb ajksdhfjhannn sdjflsjdfoioj;iahhfshusd',
    newString = string.slice(11, 14);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newString;
    document.getElementById('result').appendChild(newElem);
};
