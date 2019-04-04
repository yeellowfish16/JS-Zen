document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = '<p>Расшифрованное сообщение: " ' + decryptString(document.getElementById('input').value) + '". </p>';
    document.getElementById('result').appendChild(newElem);
};

// Функция, расшифровывающая сообщение
// @param incomingString - строка, которую надо расшифровать

function decryptString(incomingString) {
    var string=[],
        consonants = ['Б', 'Ж', 'Ж', 'Й', 'П', 'Ф', 'В', 'Г', 'Д', 'З'],
        change = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
        newString = '';

    incomingString=incomingString.split('').reverse().join('');

    for (var i=0; i < incomingString.length; i++) {
        string[i] = incomingString[i];

        for (var j=0; j < consonants.length; j++) {
            if (string[i] == consonants[j]) {
                string[i] = change[j];
            }
        }

        newString += string[i];
    }

    return newString;
}
