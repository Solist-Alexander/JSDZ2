// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б






let square = (a,b) => a * b

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (r) => r * r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let square_cylinder = (h, r) =>(2 * h * r) + 2 * r * r

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [2, 4, 6, 7, 8, 9, 'adasd', true, null]

let arrayResponse = (arr)=> {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createText = (text) => {
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createLi = (text)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createLi = (text, how) => {
    document.write(`<ul>`)
    for (let i = 0; i < how; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array2 = [2, 4, 6, 7, 8, 9, 'adasd', true, null]

let createArrLi =(arr)=> {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObj = [
    {
        id: 1,
        name: 'sasha',
        age: 4
    },
    {
        id: 2,
        name: 'igor',
        age: 5
    },
    {
        id: 3,
        name: 'natasha',
        age: 42
    },
    {
        id: 4,
        name: 'aboba',
        age: 44
    },
]

let obj = (arrObj) => {
    for (const objElement of arrObj) {
        document.write(`<div style="border: bisque solid 2px">`)
        for (const objElementKey in objElement) {
            document.write(`<div>${objElementKey}: ${objElement[objElementKey]}</div>`)
        }
        document.write(`</div>`)
    }
}

// - створити функцію яка повертає найменьше число з масиву
let array12 = [34, -24, 42,32,0,4,1,6,3,2,-98]
let minNumber = (array) => {
    let minNumber = 0
    for (let i = 0; i < array.length; i++) {
        if (minNumber > array[i]){
            minNumber = array[i]
        }
    }
    return minNumber
}
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let  sumNumber = (array)=>{
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrSwap = [11,22,33,44]
let swap = (arr, index1,index2)=>{
    num1 = arr[index1]
    num2 = arr[index2]
    arr[index1] = num2
    arr[index2] = num1
    console.log(arr)
    console.log(arr[index2])
}
swap(arrSwap, 0, 3)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyElement of currencyValues) {
        if(currencyElement.currency === exchangeCurrency){
            let result = sumUAH / currencyElement.value
            return result
        }
    }

}