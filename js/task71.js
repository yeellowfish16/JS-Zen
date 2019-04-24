var string = 'show must go on';

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Строка в camelCase: ' + toCamelCase(string) + '. </br> Строка в snake_case: ' + toSnakeCase(string) + '.';
    document.getElementById('result').appendChild(newElem);
};


// Функция, приводящая к camelCase

function toCamelCase(string) {
    var arr = string.split(' ');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return string = arr.join('');
}

// Функция, приводящая к snakeCase

function toSnakeCase(string) {
    var arr = string.split(' ');
    return string = arr.join('_');
}
