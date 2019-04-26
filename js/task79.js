var num1 = 10,
    num2 = 4;

num1 += num2;
num2 -= num1;
num2 *= -1;
num1 -= num2;

document.getElementById('check').onclick = function () {
    alert(num1);
    alert(num2);
};
