var string = 'var_test_text';

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = toCamelCase(string);
    document.getElementById('result').appendChild(newElem);
};

// Функция, приводящая к camelCase

function toCamelCase(string) {
    var arr = string.split('_');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    string = arr.join('');

    return string;
}
