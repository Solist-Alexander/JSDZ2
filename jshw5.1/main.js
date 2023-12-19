// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a, b, c) => {
//     let min = a
//     for (let i = 0; i < arguments.length; i++) {
//         if(arguments[i] < min){
//             min = arguments[i]
//         }
//     }
//     return min
// }


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a,b,c) =>{
//     let max = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max){
//             max = arguments[i]
//         }
//     }
//     return max
// }

// - створити функцію яка повертає найбільше число з масиву
let array = [2, 34, 3, 2, 1, 35, 32, 7, 5, 3]
let maxNumber = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

// - створити функцію яка повертає найменьше число з масиву

let minNumber = (arr) => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//

let sumArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// let resNumber = (n)=>{
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
//
// }
// resNumber(3)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
let resNumber = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    }
    if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i)
        }
    }
}
resNumber(8,4)

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


let arrSwap = (arr, index) =>{
    num1 = arr[index]
    num2 = arr[index + 1]
    arr[index] = num2
    arr[index + 1] = num1
    console.log(arr)
}
arrSwap([9,8,0,4], 2)


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let swapZero = (arr) =>{
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0 ){
            newArr.push(arr[i])
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0 ){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(swapZero([0,0,1,0,3,5, 6,7,0,0,0,2,-1,-4,0,-3]));
