var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    day = 0;

document.getElementById('check').onclick = function () {
    showDays(arr);
};

// Функция, чтобы вывести ключ объекта и его свойство

function showDays(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i == day) {
            document.write('<i>' + arr[i] + '</i><br>');
        } else {
            document.write(arr[i] + '<br>');
        }
    }
}
