document.getElementById('check').onclick = function () {
    alert(findSubstring(document.getElementById('input').value, document.getElementById('input1').value));
};

// Функция, ищущая подстроку в строке

function findSubstring(string, substring) {
    return string.trim().indexOf(substring) >= 0 ? true : false;
}
