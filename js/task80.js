document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = convertColor(document.getElementById('input').value);
    document.getElementById('result').appendChild(newElem);
};

// Функция для конвертации цвета из слова в шестнадцатиричный код и обратно

function convertColor(string) {
    var colors = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый'],
        fullCodes = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#00FFFF', '#0000FF', '#800080'],
        shortCodes = ['#F00', '#F90', '#FF0', '#090', '#0FF', '#00F', '#909'],
        result = '';

    for (var i=0; i < colors.length; i++) {
        if (string === colors[i]) {
            result = shortCodes[i];
        }
    }

    for (var i=0; i < fullCodes.length; i++) {
        if (string === fullCodes[i] || string === shortCodes[i]) {
            result = colors[i];
        }
    }

    return result;
}
