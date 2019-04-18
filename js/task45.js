var obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
},
    keys = Object.keys(obj);

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = keys;
    document.getElementById('result').appendChild(newElem);
};
