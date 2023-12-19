// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber (a, b, c){
    let min = a
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] < min){
            min = arguments[i]
        }
    }
    return min
}

console.log(minNumber(44, -7, -3));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(a,b,c){
//     let max = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max){
//             max = arguments[i]
//         }
//     }
//     return max
// }

// console.log(maxNumber(331, 32, 3));


// - створити функцію яка повертає найбільше число з масиву

let array = [2,34,3,2,1,35,32,7,5,3,1]
function maxNumber(arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]){
            max = arr[i]
        }
    }
    return max
}

console.log(maxNumber(array))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmetic(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let result = sum / arr.length
    return result
}

console.log(arithmetic(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMax(...numbers){
    let max = numbers[0]
    let min = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]){
            max = numbers[i]
        }
        if(min > numbers[i]){
            min = numbers[i]
        }
    }
    console.log(max)
    return min
}

console.log(minMax(2, 24, 42, 4, 7, -8, 4, 312, 6));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let emptyArr = []
function randomNumber(arr){
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random()*100))
    }

    console.log(arr)
}
randomNumber(emptyArr)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function generateRandomArray(limit) {
    const randomArray = [];

    for (let i = 0; i < limit; i++) {
        const randomNumber = Math.floor(Math.random() * (limit + 1));
        randomArray.push(randomNumber);
    }

    return randomArray;
}



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
let reverseArray = [1,2,3,4,5,6,7]
function reverse(arr){
    let newArr = []
    for (let i = arr.length -1 ; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr

}

console.log(reverse(reverseArray));

//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function sumArg (a,b){
    if(arguments.length === 1){
        let result = a * a
        return result
    }
    if(arguments.length === 2){
        let result = a + b
        return result
    }
}

console.log(sumArg(9, 34))

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumArray(array1, array2){
    let sumArray = []
    if(array1.length === array2.length){
        for (let i = 0; i < array1.length; i++) {
            sumArray.push(array1[i] + array2[i])
        }
        return sumArray
    }
    if(array1.length > array2.length){
        for (let i = 0; i < array2.length; i++) {
            sumArray.push(array1[i] + array2[i])
        }
        for (let i = array2.length; i < array1.length; i++) {
            sumArray.push(array1[i])
        }
        return sumArray
    }
    if(array1.length < array2.length){
        for (let i = 0; i < array1.length; i++) {
            sumArray.push(array1[i] + array2[i])
        }
        for (let i = array1.length; i < array2.length; i++) {
            sumArray.push(array2[i])
        }
        return sumArray
    }
}

console.log(sumArray([1, 3, 5], [2, 3, 4,3,3,3,5,6]));

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
function keyObj (arrObj){
    let arrKey = []
    for (const arrElement of arrObj) {
        for (const arrObjKey in arrElement) {
            arrKey.push(arrObjKey)
        }
    }
    return arrKey
}

console.log(keyObj([{name: 'Dima', age: 13}, {model: 'Camry'}]));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function valueObj(arrObj){
    let arrValue = []
    for (const arrElement of arrObj) {
        for (const arrObjKey in arrElement) {
            arrValue.push(arrElement[arrObjKey])
        }
    }
    return arrValue
}
console.log(valueObj([{name: 'Dima', age: 13}, {model: 'Camry'}]));