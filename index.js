// // const riddle = {
// //     question: 'Висит груша нельзя скушать',
// //     correctAnswer: 'лампочка',
// //     hints: ['это съедобное', 'это фрукт'],
// //     tries: 3,
// //     checkAnswer (str) {
// //         if (this.tries < 1) {
// //             console.log('Игра оконена');
// //             return alert('Игра окончена');
// //         }
// //
// //         if (str.toLowerCase().includes(this.correctAnswer)) {
// //             alert('Правильный ответ');
// //             console.log('Правильный ответ');
// //         } else {
// //             alert('Неправильный ответ');
// //             console.log('Неправильный ответ');
// //             this.tries--;
// //
// //             const hint = this.hints[this.tries === 2 ? 0 : 1];
// //             if (this.tries) {
// //                 alert('Подсказка ' + hint);
// //             }
// //         }
// //                 },
// // }
// //
// // window.onload = function() {
// //     document.getElementById('riddle').innerText = riddle.question;
// // }
// //
// // function check() {
// //     const input = document.getElementsByTagName('input')[0];
// //
// //     const guessedAnswer = input.value;
// //
// //     if (guessedAnswer) {
// //         riddle.checkAnswer(guessedAnswer);
// //
// //
// //     }
// // }
// // const average = function (a,b,d,s) {
// //     return (a+b+d+s)/4;
// // }
// //
// // console.log(average(2,2,2,2));
//
// // let square = (a) => a**2;
// // console.log(square(5));
// //
// // let multiply = (a,b) => a*b;
// // console.log(multiply(5,4));
// //
// // // 3) Создайте стрелочную функцию, которая принимает возраст, проверяет его на критерий 18+, и в зависимости от проверки: печатает в консоль "welcome" или "access denied". Сохраните функцию в переменную checkAge.
// //
// // let checkAge = (age) => {
// //     if (age >= 18) {
// //         return alert("welcome");
// //     } else return alert("access denied");
// // }
// // checkAge(17);
// // checkAge(22);
//
// function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (callback(array[i])) newArray.push(array[i]);
//     }
//     return newArray;
// }
// const numbers = [1, 2, 3, 4, 5];
//
// function isOdd(num) {
//     return num % 2 === 1;
// }
// function isEven(num) {
//     return 0 === num % 2;
//
// }
//
// // Для проверки используйте логи (раскомментируйте их после написания функций)
// console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
// console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]
// console.log(isOdd(5));
// console.log(isEven(4));