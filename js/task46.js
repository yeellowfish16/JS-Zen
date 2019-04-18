var string = "все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.",
    arr = string.split('');

arr[0] = arr[0].toUpperCase();
string = arr.join('');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = string;
    document.getElementById('result').appendChild(newElem);
};


