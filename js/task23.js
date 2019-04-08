var string = 'Вечность',
    arr = string.toLowerCase().split(''),
    newWord = arr[3] + arr[4] + arr [5] + ', ' +
              arr[0] + arr[1] + arr[5] + arr[arr.length - 1] + ', ' +
              arr[arr.length - 2] + arr[1] + arr[3] + arr[arr.length - 1] + ', ' +
              arr[arr.length - 3] + arr[arr.length - 4] + arr[0] + arr[1] + arr[arr.length - 2] + ', ' +
              arr[arr.length - 4] + arr[arr.length - 3] + arr[1] + arr[3] + arr[arr.length - 1] + ', ' +
              arr[arr.length - 3] + arr[arr.length - 4] + arr[3] + arr[1] + arr[arr.length - 2] + ', ' +
              arr[2] + arr[1] + arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1] + ', ' +
              arr[arr.length - 3] + arr[arr.length - 2] + arr[4] + arr[3],
    newArr = newWord.split(', ');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newArr;
    document.getElementById('result').appendChild(newElem);
};

