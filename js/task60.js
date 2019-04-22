document.getElementById('check').onclick = function () {
    drawPascalTriangle();
};

//Функция, ввводящая треугольник Паскаля

function drawPascalTriangle() {
    var arr = [];

    document.write('<p>');
    for (var i = 1; i <= 100; i++) {
        arr[i] = 0;
    }
    arr[0] = 1;

    for (var j = 1; j <= 100; j++) {
        for (var k = j; k >= 1; k--) {
            document.write(arr[k - 1]);
            arr[k] = arr[k - 1] + arr[k];
        }
        document.write('<p>');
    }
}
