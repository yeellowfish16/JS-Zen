document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = toTheCube(Number(document.getElementById('input').value));
    document.getElementById('result').appendChild(newElem);
};

// Функция, возводящая число в куб

function toTheCube(number) {
    var result = number*number*number;
    return result;
}
