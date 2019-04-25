// Добавляем метод duplicate для массивов

Array.prototype.duplicate = function() {
   this.forEach(element => {
      return this.push(element);
   });
};

var arr = [1, 2, 3, 4, 5];
arr.duplicate();

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('div');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = 'Новый массив: ' + arr;
    document.getElementById('result').appendChild(newElem);
};
