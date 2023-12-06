// 1. Створити пустий масив та :
let arr = []
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0){
//         arr[arr.length] = i
//     }
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1){
//         arr.push(i)
//     }
// }
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 100) + 1)
// }
//  d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 732 - 8 + 1) + 8)
// }

let array = [1, 2, 3, 5, 7, 9, 56, 8, 67]
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < array.length; i += 3) {
//     console.log(array[i])
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
// }

// let  array2 = []
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// for (let i = 0; i < array.length ; i += 3) {
//     if (array[i] % 2 === 0){
//         array2.push(array[i])
//         console.log(array[i])
//     }
// }
// console.log('=======')
// console.log(array2)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] % 2 === 0){
//         console.log(array[i])
//     }
// }

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let array2 = [100,250,50,168,120,345,188]
// let result = 0
// for (let i = 0; i < array2.length -1; i++) {
//     result += array[i]
// }
// result = result / array.length
//
// console.log(result)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array2 = []
// let array3 = []
// for (let i = 0; i < 10; i++) {
//     array2.push((Math.floor(Math.random() * 100) + 1) * 5)
//     array3.push(array2[i])
// }
//
// console.log(array2)
// console.log(array3)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let array2 = [23, 'asds', null, null, 'asdasd', 2312, 1231231, 444, 55, 'assad', '1231', 999]
let array3 = []
for (let i = 0; i < array2.length; i++) {
    if (typeof array2[i] === 'number') {
        array3.push(array2[i])
    }
}
console.log(array3)
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = []
// for (const userWithId of usersWithId) {
//     usersWithCities.push(userWithId)
// }
// //
// for (const citiWithId of citiesWithId) {
//     for (const userWithCiti of usersWithCities) {
//             if (userWithCiti.id === citiWithId.user_id){
//                 userWithCiti.address = citiWithId
//             }
//         }
//     }
//
// console.log(usersWithCities)




//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//

// let array5 = [100,250,50,168,120,345,188,8,9,10]
//
// for (let i = 0; i < array5.length; i++) {
//     if (array5[i] % 2 === 0){
//         console.log(array5[i])
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let array5 = [100,250,50,168,120,345,188,8,9,10]
// let array6 = []
//
// for (let i = 0; i < array5.length; i++) {
//     array6.push(array5[i])
// }
// console.log(array5)
// console.log(array6)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrString = [ 'a', 'b', 'c']
let newArrString = []
// for (let i = 0; i <  arrString.length; i++) {
//     newArrString += arrString[i]
// }
// console.log(newArrString)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let x = 0
// while (x < arrString.length){
//     newArrString += arrString[x]
//     x++
// }
// console.log(newArrString)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (const string of arrString) {
    newArrString += string
}
console.log(newArrString)




