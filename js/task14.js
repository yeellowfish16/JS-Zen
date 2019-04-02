var cat = {
    name: 'Пуркович',
    age: 5,
    color: 'Рыжий',
};

document.getElementById('check').onclick = function() {
    alert('Новый котик ' + cat.name + '.  Его возраст: ' + cat.age + ' лет. Он ' + cat.color + '.');
}
