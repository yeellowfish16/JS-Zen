document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = checkStartOfString(document.getElementById('input').value, 'http://');
    document.getElementById('result').appendChild(newElem);
};

// Функция, проверяющая совпадение начала строки с шаблоном
// @param string - строка, которую проверяем на соответствие
// @param strTesmplate - шаблон, с которым сравниваем

function checkStartOfString(string, strTemplate) {
    if (string.substr(0, strTemplate.length) === strTemplate) {
        return 'Все верно'
    }
    return 'Нет, строка начинается с чего-то другого'
}
