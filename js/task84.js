var obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};

document.getElementById('check').onclick = function () {
    showObject(obj);
};

// Функция, чтобы вывести ключ объекта и его свойство

function showObject(object) {
    for (var key in object) {
        alert(key + ' - это ' + object[key] + '.');
    }
}
