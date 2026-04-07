
//Reverse string without using builtin methods
//jasvika

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i];

//     }
//     return reversed;

// }
// console.log(reverseString("jasvika"))
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1 resolved')
//     }, 5000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p2 resolved')
//     }, 10000)
// })
// async function getData() {
//     console.log('normal output')
//     const val1 = await p1;
//     console.log(val1)

//     const val2 = await p2;
//     console.log(val2)
// }
// getData();

// function x() {
//     var a = 10;
//     function y() {
//         var b = 20;
//         function z() {
//             console.log(a)
//         }
//         z();
//     }
//     y();
// }
// z();
// let k = z();
// console.log(k)
//closure code:
// function outer() {
//     let count = 0;
//     function inc() {
//         count = count + 1;
//         console.log("increment :", count)

//     }
//     function dec() {
//         count = count - 1;
//         console.log("decrement :", count)

//     }
//     return { inc, dec }
// }
// let x = outer();
// let y = outer()
// x.inc();

// x.inc();
// y.inc();
// var name = "Sai";

// function test() {
//     var name = "Dev";
//     console.log(name)
// }
// test( )
// function test() {
//     console.log("callback executed")
// }
// function mainFunction(callbackFunction) {
//     console.log("main fun : before callback")
//     callbackFunction()
//     console.log("main fun : before callback")

// }
// mainFunction(test)


// function greet(name, callback) {
//     console.log("hello" + name)
//     callback()
// }
// function dummy() {
//     console.log("this is callback")
// }
// greet("sai", dummy)

// function cal(a, b, operation) {
//     operation(a, b)
// }
// function add(x, y) {
//     return x + y;
// }

// console.log(cal(5, 10, add))

// let arr = [1, 2, 3, 4];
// // function double(arr) {
// //     return arr * 2;
// // }
// // const x = arr.map(double)
// // console.log(x)
// const double = arr.map((ele) => {
//     return ele * 2
// })
// console.log(double)
// const triple = arr.map((e) => e * 3)
// console.log(triple)

