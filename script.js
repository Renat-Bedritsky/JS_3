// 1

console.log('');
console.log('1 задание');

for (i = 1; i <= 50; i++) {
    console.log(i);
}

console.log('');

for (j = 35; j >= 8; j--) {
    console.log(j);
}

// 2

document.write('<br>');
document.write('2 задание');

let x = 89;
while(x >= 11) {
    document.write(x + '<br>');
    x--;
}

document.write('<br>');

// 3

console.log('');
console.log('3 задание');

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log('Сумма 1+...+100 = ' + sum);

// 4

console.log('');
console.log('4 задание');

let suma = 0;

for (let v = 1; v <= 5; v++) {
    for (let j = v; j <= v; j++) {
        suma += j;
    }

    console.log('Число ' + v + ' = ' + suma);
}

// 5

console.log('');
console.log('5 задание');

let c = 8;

while(c <= 56) {
    c++;
    if (c % 2 == 1) continue;
    console.log(c);
}

console.log('');

for(b = 8; b <= 56; b++) {
    if (b % 2 == 1) continue;
    console.log(b);
}

// 6

console.log('');
console.log('6 задание');

for (let i = 2; i <= 10; i++) {
    for (let t = 1; t <= 10; t++) {
        console.log(i + '*' + t + '=' + i * t);
    }
    console.log('');
}

// 7

console.log('');
console.log('7 задание');

let n;
let num = 0;
for (n = 1000; n >= 50; n /= 2) {
    num++;
}
console.log('Число: ' + n);
console.log('Количество итераций: ' + num);

// 8

console.log('');
console.log('8 задание');

let num8,
    res = 0;

do {

    num8 = prompt('Введите число');

    if(num8 == 0) {
        alert('Введите число больше нуля');
    }
    else if(num8 >= 1) {
        res = res + Number(num);
    }
    else if(num8 != Number) {
        alert('Вы ввели не число!');
    }
    
}

while(num8 != 0);
console.log('Сумма чисел ' + res);
console.log('Среднее арифметическое чисел ' + res / 2);

//9

console.log('');
console.log('9 задание');

let mass = ["4", "98", "4", "6", "1", "32", "4", "65", "4", "3", "5", "7", "89", "7", "10", "1", "36", "8", "57"];

if(mass > 1) {
    console.log(mass);
    mass++;
}