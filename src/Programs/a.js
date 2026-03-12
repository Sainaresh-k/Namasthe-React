
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
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved')
    }, 5000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved')
    }, 10000)
})
async function getData() {
    console.log('normal output')
    const val1 = await p1;
    console.log(val1)

    const val2 = await p2;
    console.log(val2)
}
getData();


