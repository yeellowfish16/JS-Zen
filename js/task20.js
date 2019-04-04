document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = '<p>Зашифрованное сообщение: " ' + encryptString(document.getElementById('input').value) + '". </p>';
    document.getElementById('result').appendChild(newElem);
};

// Функция, шифрующая сообщение
// @param incomingString - строка, которую надо зашифровать

function encryptString(incomingString) {
    var string=[],
        vowel = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'],
        change = ['Б', 'Ж', 'Ж', 'Й', 'П', 'Ф', 'В', 'Г', 'Д', 'З'],
        newString = '';

    incomingString=incomingString.split('').reverse().join('').toLowerCase();

    for (var i=0; i < incomingString.length; i++) {
        string[i] = incomingString[i];

        for (var j=0; j < vowel.length; j++) {
            if (string[i] == vowel[j]) {
                string[i] = change[j];
            }
        }

        newString += string[i];
    }

    return newString;
}
