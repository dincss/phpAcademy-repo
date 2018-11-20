//
//
// var ask = prompt('Сколько Вам лет?');
//
// // console.log(!isNaN(+ask));
// console.log(isNaN(ask));
//
//
// if(!isNaN(ask)) {
//     // alert('no');
//
//     if(ask >= 18) {
//         alert('Хорошо, вам можно');
//     } else {
//         alert('Вам запрещенно!')
//     }
//
// } else {
//     alert('введите число');
// }
//








// И И ИЛИ

// var string = '';
// var b = 2;
//
// // &&
// // ||
// // !!
//
// var bool = !!string || !b;
//
// alert(bool);
//
//
//






// ПРЕОБРАЗОВАНИЕ ЧИСЕЛ В СТРОКИ И НАОБОРОТ

// var string = 'hello';
// var num = 10;
//
// var res = (Number(string));
//
// alert(!isNaN(res));
//
//
// var num = 10;
// // var string = 'hello';
//
// var res = (String(num));
// var res2 = +res;
//
//
// alert(typeof res2);






// for (var i = 10; i < 10; i--) {
//     console.log(i);
// }






var question = prompt(' Какую операцию вы желаете выполнить (add, subtract, divide, multiply)');


var num1 = prompt('Введите первое число');
var num2 = prompt('Введите второе число');

var newNum1 = !isNaN(num1);
var newNum2 = !isNaN(num2);



if(!!newNum1 && !!newNum2 ) {
    if(question) {
        if(question == 'add') {
            alert(Number(num1) + Number(num2));
        } else if(question == 'subtract') {
            alert(Number(num1) - Number(num2));
        } else if(question == 'divide') {
            alert(Number(num1) / Number(num2));
        } else if(question == 'multiply') {
            alert(Number(num1) * Number(num2));
        }
    } else {
        alert('Вы не ввели операцию');
    }
} else {
    alert('Введите число');
}


// Запросить у пользователя какую операцию он желает выполнить (add, subtract, divide, multiply),
//     далее запросить два числа для выполнения операции, выполнить операцию и вывести результат
//
//
//



// var question = prompt(' Какую операцию вы желаете выполнить (add, subtract, divide, multiply)');
//
//
// var num1 = prompt('Введите первое число');
// var num2 = prompt('Введите второе число');
//
// // console.log( !num1);
//
//
// var newNum1 = isNaN(num1);
// var newNum2 = isNaN(num2);
//
// var newNum11 = !num1;
// var newNum22 = !num2;
//
// // console.log(newNum1);
//
// // console.log(newNum1);
// // console.log(newNum2);
//
// // console.log(newNum11);
// // console.log(newNum22);
//
//
// var test = newNum1 || newNum11 || newNum2 || newNum22;
// console.log(test);
//
//
//
//
// if(!test) {
//     if(question) {
//         if(question == 'add') {
//             alert(Number(num1) + Number(num2));
//         } else if(question == 'subtract') {
//             alert(Number(num1) - Number(num2));
//         } else if(question == 'divide') {
//             alert(Number(num1) / Number(num2));
//         } else if(question == 'multiply') {
//             alert(Number(num1) * Number(num2));
//         }
//     } else {
//         alert('Вы не ввели операцию');
//     }
//
//
// } else {
//     alert('Введите число');
// }
//
//
// // Запросить у пользователя какую операцию он желает выполнить (add, subtract, divide, multiply),
// //     далее запросить два числа для выполнения операции, выполнить операцию и вывести результат
// //




