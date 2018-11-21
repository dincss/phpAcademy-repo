// for loop

// for (var i = 0; i < 10; i++) {
//
//     var range = i >= 0 && i <= 5;
//
//     if(range) {
//         console.log(i);
//     }
//
// }


// // while loop
//
//
// var i = 0;
// while(i <= 5) {
//
//     console.log(i);
//     i++;
// }


// // do while loop
//
//
// var i = 0;
//
// do {
//     console.log(i);
//     i++;
// } while(i <= 5);


// function expression

// function fex() {
//     for (var i = 0; i < 10; i++) {
//
//         var range = i >= 0 && i <= 5;
//
//         if (range) {
//             console.log(i);
//         }
//     }
// }
//
// fex();

// function fex() {
//
//     var i = 0;
//     while (i <= 5) {
//
//         console.log(i);
//         i++;
//     }
//
//
// }
//
// fex();


// function fex() {
//
//     var i = 0;
//
//     do {
//         console.log(i);
//         i++;
//     } while (i <= 5);
//
//
// }
//
// fex();





// function declaration

// var funcDec = function () {
//
//     for (var i = 0; i < 10; i++) {
//
//         var range = i >= 0 && i <= 5;
//
//         if (range) {
//             console.log(i);
//         }
//     }
//
//
// }
//
//
// funcDec();



// self invoking function

// (function () {
//
//
//     for (var i = 0; i < 10; i++) {
//
//         var range = i >= 0 && i <= 5;
//
//         if (range) {
//             console.log(i);
//         }
//     }
//
// }) ();

//
// function factorial( n ) {
//     if ( n === 1 ) {
//         return 1;
//     }
//
//     return n * factorial( n - 1 );
// }
//
// var b = factorial(4);
//
// console.log(b);



// // 5 в степени 3;
//
// function f(num, step) {
//
// var result = 1;
//
//
//
//     for(var i = 0; i < step; i++) {
//
//         result = result * num;
//
//     }
//     return result;
//
// }
//
// console.log(f(5,3));
//




// arrays

// var obj = {
//     a: 45,
//     b: 'df',
// };
// var arr2 = [1, 'ds'];
// var arr = [5, 'aaa', true, null, obj.a, arr2[3], 97 ];
// var newArr = [];
// var arr = [5, 'aaa', true, null, obj, arr2 ];
//
// for(var i = 0; i < arr.length; i++ ) {
//     console.log(arr[i], typeof obj);
// }


// forEach


// var arr = [5, 'aaa', true, null, obj.a, arr2[3] ];
//
// var newArr = [];
//
//
// arr.forEach(function(elem, num, ar){
//
//     console.log(elem, num, ar);
//
//
//
// });

// var arrNum = [1, 2, 3, 4, 5];
// arrNum.forEach(function (elem, i) {
//
//     // console.log(elem, i);
//     newArr.push(elem += elem);
//
// });
//
// console.log(newArr);
//

//
// var forEach = arrNum.forEach(function (item, i, mas) {
//     console.log(item, i, mas);
// })
//
// var map = arrNum.map(function (item) {
//     return item * 2;
// })
//
//
// // console.log(map);
// console.log(forEach);
//

// var statusLoop = true;
//
// for (var i = 0; statusLoop; i++) {
//
//     console.log(i);
//     if(i === 5) {
//         statusLoop = false;
//     }
//
// }

// 2, 4, 8, 5, 3
// var arr = [];
// var i, j, k;
// var n = arr.length;
//
//
//
// // var bb = mas[i] > mas[i + 1]
//
// for(i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * 10));
// }
// console.log(`Исходный массив ${arr}`);
// console.log(`Количество элементов в массиве ${n}`);
//
//
// for (j = 0; j < n; j++) {
//     for (i = 0; i < n - 1; i++) {
//
//         if (arr[i] > arr[i + 1]) {
//             k = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = k;
//         }
//
//     }
//     console.log(`Новый массив ${arr}`);
// }
//




//
//
// var arrNum = [1, 2, 3, 4, 5];
// var forEach = arrNum.forEach(function (item, i, mas) {
//     // console.log(item, i, mas);
//
// })
//
// var map = arrNum.map(function (item, i) {
//     // return item * 2;
//     return item += item;
// })
//
// var filter = arrNum.map(function (item, i) {
//     // return item * 2;
//     return item += item;
// })
//
// // console.log(map);
// // console.log(forEach);
// console.log(filter);
//
//






function callMe (a, b, callback) {

    if(typeof callback === 'function') {
        callback();
    } else {
        console.log(`Тут нет функции`);
    }

}

callMe('as', 'ss',  function () {
    console.log(`Тут есть функция`);
});

// callMe('as', 'ss');




var arr = [2, 4, 8, 5, 3];
var i, j, k;
var n = 6;


console.log(`Исходный массив ${arr}`);
console.log(`Количество элементов в массиве ${n}`);


for (j = 0; j < n; j++) {
    for (i = 0; i < n - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            k = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = k;
        }

    }
    console.log(`Новый массив ${arr}`);
}
























