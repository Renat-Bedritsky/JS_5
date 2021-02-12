// Задание 1

document.write(' <br> --- Задание 1: Функция, которая отнимает от первого числа второе и делит на третье --- <br> ');

function number1(a, b, c) {
    result1 = (a - b) / c
}
number1(8, 2, 3);
document.write(result1);

// Задание 2

document.write(' <br><br> --- Задание 2: Функцию, которая возвращает куб числа и его квадрат --- <br> ');

function number2(a) {
    cub2 = a * a * a;
    square2 = a * a;
}

number2(4);

document.write(`Куб числа: ${cub2} <br>`);
document.write(`Квадрат числа: ${square2}`);

// Задание 3

document.write(' <br><br> --- Задание 3: Функция min и max, которые возвращают меньшее и большее из чисел a и b --- <br> ');

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
document.write(`Максимальное число: ${max}`);

// Задание 4

document.write(' <br><br> --- Задание 4: Первая ф-ция должна возвращать массив, вторая – выводить полученный массив --- <br> ');

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

// Задание 5

document.write(' <br><br> --- Задание 5: Функция, которая проверяет чётное число или нет --- <br> ');

function isEven(num5) {
    return (num5 % 2 == 0) ? true : false;
}

let result5 = isEven(136);
document.write(result5);

// Задание 6

document.write(' <br><br> --- Задание 6: Вывести из массива только чётные числа, используя ф-ию из 5 задания --- <br> ');

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

// Задание 7

document.write(' <br><br> --- Задание 7: Функция, которая рисует пирамидку --- <br> ');

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
number7(7);

// Задание 8

document.write(' <br><br> --- Задание 8: Первая ф-ция рисует равнобедренный треугольник из звездочек, вторая такой же треугольник, но перевёрнутый --- <br> ');

document.write('<br> Обычный треугольник: <br><br>')

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

document.write('<br> Перевёрнутый треугольник: <br><br>')

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

// Задание 9

document.write(' <br><br> --- Задание 9: Ф-ция, которая возвращает массив заполненный числами Фибоначи от 0 до 1000 --- <br> ');

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

// Задание 10

document.write(' <br><br> --- Задание 10: Сложить цифры числа --- <br> ');

function number10(a) {
    let result10 = 0;
    if(a >= 10) {
        a = String(a);
        for(let i = 0; i < a.length; i++) {
            result10 += Number(a[i]);
        }
        a = number10(result10);
    }
    return a;
}

document.write(number10(55));

// Задание 11

document.write(' <br><br> --- Задание 11: Последовательно вывести из массива элементы с числами, используя рекурсию и не используя цикл --- <br> ');

function number11(array) {
    document.write(`${array[i]} `);
    i++
    if(i < array.length) number11(array);
}

let i = 0;

number11([3, 65, 12, 87, 43]);

// Задание 12

document.write(' <br><br> --- Задание 12: Вывести данные  --- <br> ');
document.write(' Результат выведен в консоль <br> ');

function number12() {

    firstName = prompt('Ваше имя?');
    while(firstName == null || firstName == Number(firstName) || firstName.length < 2) {
        firstName = prompt('Неправильно. Введите имя');
    }

    surname = prompt('Ваша фамилия?');
    while(surname == null || surname == Number(surname) || surname.length < 2) {
        surname = prompt('Неправильно. Введите фамилию');
    }

    lastName = prompt('Ваше отчество?');
    while(lastName == null || lastName == Number(lastName) || lastName.length < 2) {
        lastName = prompt('Неправильно. Введите отчество');
    }

    numGroup = prompt('Номер Вашей группы?');
    while(numGroup == null) {
        numGroup = prompt('Неправильно. Введите номер группы');
    }

    margin = '';
    widthWork = '';
    widthA = '';
    widthGroup = '';
    widthB = '';
    widthNames = '';
    widthC = '';

    work = ' Домашняя работа: "Функции" ';
    group = ` Выполнил студент гр. ${numGroup} `;
    allNames = ` ${surname} ${firstName} ${lastName} `;

    function width() {
        for(i = 0; i < widthA; i++) {
            widthWork += ' ';
        }
        for(i = 0; i < widthB; i++) {
            widthGroup += ' ';
        }
        for(i = 0; i < widthC; i++) {
            widthNames += ' ';
        }
    }

    if(work.length >= group.length && work.length >= allNames.length) {
        for(i = -2; i < work.length; i++) {
            margin += '*'; 
        }
        widthA = 0;
        widthB = work.length - group.length;
        widthC = work.length - allNames.length;
        width();
    }
    else if(group.length > allNames.length && group.length > work.length) {
        for(i = -2; i < group.length; i++) {
            margin += '*'; 
        }
        widthA = group.length - work.length;
        widthB = 0;
        widthC = group.length - allNames.length;
        width();
    }
    else if(allNames.length > work.length && allNames.length > group.length) {
        for(i = -2; i < allNames.length; i++) {
            margin += '*'; 
        }
        widthA = allNames.length - work.length;
        widthB = allNames.length - group.length;
        widthC = 0;
        width();
    }

    console.log(margin);
    console.log(`*${work}${widthWork}*`);
    console.log(`*${group}${widthGroup}*`);
    console.log(`*${allNames}${widthNames}*`);
    console.log(margin);
}

number12();

// Задание 13

document.write('<br><br> --- Задание 13: Проверить email  --- <br> ');
document.write(' Не сделал ');