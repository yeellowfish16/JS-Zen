var string = 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.';

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = cutString(string, Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, обрезающая строку
// @param str - строка, которую надо обрезать
// @param numCutLength - количество символов, до которых надо обрезать

function cutString(str, numCutLength) {
    if (str.length > numCutLength) {
        str = str.substr(0, numCutLength) + '...';
    }

    return str;
}
