var string = 'Каравай',
    arr = string.split('');

arr[0] = 'П';
arr[1] = 'о';
arr[3] = 'т';
arr[5] = 'е';

arr.push('н');

string = arr.join('');

document.getElementById('check').onclick = function () {
    alert(string);
};
