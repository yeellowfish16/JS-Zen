var fruits = ['апельсин', 'банан', 'груша'];

document.getElementById('check').onclick = function () {
    showResult('result', '<b>В массиве ' + fruits.length + ' фрукта.</b>');
};

var newFruits = [];
newFruits = newFruits.concat(fruits);
newFruits.push('яблоко', 'ананас');
newFruits.unshift('грейпфрут');

document.getElementById('check1').onclick = function () {
    showResult('result1', '<b>В массиве сейчас находятся фрукты: ' + newFruits + '.</b>');
};

document.getElementById('check2').onclick = function () {
    showResult('result2', '<b>Теперь в массиве ' + newFruits.length + ' фруктов.</b>');
};

var newNewFruits = [];
newNewFruits = newNewFruits.concat(newFruits);
newNewFruits.pop();
newNewFruits.shift();

document.getElementById('check3').onclick = function () {
    showResult('result3', '<b>Теперь в массиве такие фрукты: ' + newNewFruits + '.</b>');
};

document.getElementById('check4').onclick = function () {
    showResult('result4','<b>Теперь в массиве ' + newNewFruits.length + ' фрукта.</b>');
};

var testFruits = ['яблоко', 'апельсин', 'груша', 'гранат'];
testFruits.splice(testFruits.length - 2, 1, 'ананас');

document.getElementById('check5').onclick = function () {
    showResult('result5','<b>Теперь в массиве такие фрукты: ' + testFruits + '.</b>');
};

function showResult(elementId, innerHtml) {
    var newElem = document.createElement('div');
    document.getElementById(elementId).innerHTML = '';
    newElem.innerHTML = innerHtml;
    document.getElementById(elementId).appendChild(newElem);
}
