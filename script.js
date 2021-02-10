// 1

document.write('<br>');
document.write('--- Задание 1: Функция, которая отнимает от первого числа второе и делит на третье ---');
document.write('<br>');

function number1(a, b, c) {
    result1 = (a - b) / c
}
number1(8, 2, 3);
document.write(result1);

document.write('<br>');

// 2

document.write('<br>');
document.write('--- Задание 2: Функцию, которая возвращает куб числа и его квадрат ---');
document.write('<br>');

function number2(a) {
    cub2 = a * a * a;
    square2 = a * a;
}

number2(4);

document.write(`Куб числа: ${cub2} <br>`);
document.write(`Квадрат числа: ${square2} <br>`);

// 3

document.write('<br>');
document.write('--- Задание 3: Функция min и max, которые возвращают меньшее и большее из чисел a и b. ---');
document.write('<br>');

function number3(a, b) {
    if (a < b) {
        min = a;
        max = b;
    } else if (a > b) {
        min = b;
        max = a;
    }
}

number3(83, 28);

document.write(`Минимальное число: ${min} <br>`);
document.write(`Максимальное число: ${max} <br>`);

// 4

document.write('<br>');
document.write('--- Задание 4: Первая ф-ция должна возвращать массив, вторая – выводить полученный массив ---');
document.write('<br>');

let mass4 = [];

function number4() {
    let num4 = prompt('Введите число. Отмена - стоп');
    if (num4 == Number(num4) && num4 != 0) {
        mass4.push(num4);
        number4();
    } else if (num4 == String(num4)) {
        alert('Вы ввели не число');
        number4();
    }
}

function coun4() {
    document.write(mass4);
}

number4();
coun4();

document.write('<br>');

// 5

document.write('<br>');
document.write('--- Задание 5: Функция, которая проверяет чётное число или нет ---');
document.write('<br>');

function isEven(num5) {
    return (num5 % 2 == 0) ? true : false;
}

let result5 = isEven(136);
document.write(result5);

document.write('<br>');

// 6

document.write('<br>');
document.write('--- Задание 6: Вывести из массива только чётные числа, используя ф-ию из 5 задания  ---');
document.write('<br>');

let mass6 = [6, 5, 98, 32, 65, 834, 905, 236, 547, 23, 54],
    array6 = [];

function isEven2() {
    for(let i = 0; i < mass6.length; i++) {
        if(isEven(mass6[i]) == true) {
            array6.push(mass6[i]);
        }
    }
}

isEven2(mass6);
document.write(array6);

document.write('<br>');

// 7

document.write('<br>');
document.write('--- Задание 7: Функция, которая рисует пирамидку  ---');
document.write('<br>');

let mass7 = [],
    num7;

function number7(a) {
    if(a == Number(a)) {
        for(let i = 1; i <= a; i++) {
            for(let j = 1; j <= i; j++) {
                document.write(i);
            }
            document.write('<br>');
            mass7 = [];
        }
    }
    else {
        for(let i = 1; i <= 9; i++) {
            for(let j = 1; j <= i; j++) {
                document.write('*');
            }
            document.write('<br>');
            mass7 = [];
        }
    }
}
number7('9');

document.write('<br>');

// 8

document.write('<br>');
document.write('--- Задание 8: Первая ф-ция рисует равнобедренный треугольник из звездочек, вторая такой же треугольник, но перевёрнутый  ---');
document.write('<br>');

let num8 = 0;

function number8(a){
    coun8 = a;
    for(s = 1; s <= a; s++) {
        for(v = 0; v < coun8; v++) {
            document.write('<b style="color: white;">*</b>');
            num8++;
        }
        coun8 = num8 - 1;
        num8 = 0;
        for(j = 0; j < s; j++) {
            document.write('*');
        }
        for(u = 1; u < s; u++) {
            document.write('*');
        }
        document.write('<br>');
    }
}

number8(5);

function number8_2(a) {
    dex1 = a;
    dex2 = a - 1;
    for(e = 1; e <= a; e++) {
        for(z = 0; z < e; z++) {
            document.write('<b style="color: white;">*</b>');
        }
        for(t = dex1; t > 0; t--) {
            document.write('*');
            num8++;
        }
        dex1 = num8 - 1;
        num8 = 0;
        for(t = dex2; t > 0; t--) {
            document.write('*');
            num8++;
        }
        dex2 = num8 - 1;
        num8 = 0;
        document.write('<br>');
    }
}

number8_2(5);

document.write('<br>');

// 9

document.write('<br>');
document.write('--- Задание 9: Ф-ция, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.  ---');
document.write('<br>');

let mass9 = [];

function number9(a) {
    d = 0;
    o = 1;
    while(d < a) {
        o = d + o;
        mass9.push(d);
        d = o - d;
    }
    document.write(mass9);
}

number9(1000);

document.write('<br>');

// 10  НЕ ДОДЕЛАНО
/*
document.write('<br>');
document.write('--- Задание 10: Сложить цифры числа  ---');
document.write('<br>');

let mass10 = [],
    array10 = [],
    num10 = 0;

function number10(a) {
    mass10.push(a);
    if(mass10[0] >= 10) {
        mass10[0] = [];
        array10.push(mass10[0][0])
        document.write(array10);
    }
    else if(mass10[0] < 10) {
        console.log(a);
    }
}

number10(10);

document.write('<br>'); */

// 11

document.write('<br>');
document.write('--- Задание 11: Последовательно вывести из массива элементы с числами, используя рекурсию и не используя цикл..  ---');
document.write('<br>');

function number11(array) {
    document.write(`${array[i]} `);
    i++
    if(i < array.length) number11(array);
}

let i = 0;

number11([3, 65, 12, 87, 43]);

document.write('<br>');

// 12 НЕ ДОДЕЛАНО
/*
document.write('<br>');
document.write('--- Задание 12: Вывести данные  ---');
document.write('<br>');

function number12() {
    firstName = prompt('Ваше имя?');
    surname = prompt('Ваша фамилия?');
    lastName = prompt('Ваше отчество?');
    numGroup = prompt('Номер Вашей группы?');
    console.log('******************************');
    console.log('* Домашняя работа: "Функции" *');
    console.log(`* Выполнил студент гр. ${numGroup} *`);
    console.log(`* ${surname} ${firstName} ${lastName} *`);
    console.log('******************************');
}

number12();

document.write('<br>');

// 13

document.write('<br>');
document.write('--- Задание 13: Проверить email  ---');
document.write('<br>'); */

document.write('10, 12, 13 НЕ СДЕЛАНО');