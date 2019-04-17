var str = 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.';

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = cutString(str, Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, обрезающая строку
// @param str - строка, которую надо обрезать
// @param numCutLength - количество символов, до которых надо обрезать

function cutString(str, numCutLength) {
    var result = null;

    if (str.length > numCutLength) {
        result = str.substr(0, numCutLength) + '...';
    }

    else {
        result = str;
    }

    return result;
}
