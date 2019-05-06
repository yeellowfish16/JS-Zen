var arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    date = new Date(),
    day = date.getDay();

document.getElementById('check').onclick = function () {
    showDays(arr);
};

// Функция, чтобы вывести ключ объекта и его свойство

function showDays(arr) {
    for (var i = 1; i <= arr.length; i++) {
        if (i == day) {
            document.write('<i>' + arr[i - 1] + '</i><br>');
        } else {
            document.write(arr[i - 1] + '<br>');
        }
    }
}
