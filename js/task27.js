var string = 'hasgduiudasfhasjhdgfoifhiahgjkajhgkaufb asdjkfaiosfdsaihfisdfu',
    array = string.split(''),
    newString = '';
array.sort(mixRandom);
newString = array.join('');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newString;
    document.getElementById('result').appendChild(newElem);
};

// Функция для случайного перемешивания массива

function mixRandom() {
  return Math.random() - 0.5;
}
