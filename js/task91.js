var array = [];

for (i=0; i < 10; i++) {
    array[i] = Math.round(Math.random()*1000);
}

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = array;
    document.getElementById('result').appendChild(newElem);
};


