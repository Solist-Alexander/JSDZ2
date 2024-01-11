// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.createElement('form')
// let inputName = document.createElement('input')
// inputName.type = 'text'
// inputName.placeholder = 'Name'
// let inputSruname = document.createElement('input')
// inputSruname.type = 'text'
// inputSruname.placeholder = 'Sruname'
// let inputAge = document.createElement('input')
// inputAge.name = 'age'
// inputAge.type = 'number'
// let button = document.createElement('button')
// button.innerText = 'Create Element'
// button.addEventListener('click', function (ev){
//     ev.preventDefault()
//     let div = document.createElement('div')
//     div.style.height = '80px'
//     div.style.width = '200px'
//     div.style.border = '2px solid grey'
//     div.innerText = `Name: ${inputName.value}\nSruname: ${inputSruname.value}\nAge: ${inputAge.value}`
//     document.body.append(div)
// })
//
// form.append(inputName, inputSruname, inputAge, button)
// document.body.append(form)


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let div = document.createElement('div')
// div.style.height = '80px'
// div.style.width = '80px'
// div.style.border = '2px solid grey'
// div.style.display = 'flex'
// div.style.flexDirection = 'column'
// div.style.justifyContent = 'center';
// div.style.textAlign =  'center';
// // let restartNumber = document.createElement('h1')
// let restartNumberStorage = localStorage.getItem('restartNumber')
// let restartNumber = JSON.parse(restartNumberStorage) || 0
// restartNumber += 1
//
// localStorage.setItem('restartNumber', JSON.stringify(restartNumber))
//
//
// div.append(restartNumber)
// document.body.append(div)


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
// let sessionsStorage = JSON.parse(localStorage.getItem('sessions')) || []
// let objSessions = {user: new Date().toLocaleString()}
// sessionsStorage.push(objSessions)
// localStorage.setItem('sessions', JSON.stringify(sessionsStorage))
//
//
// console.log(new Date().toLocaleString())


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let arr = []
// let newArr = []
// let tenNumbers = []
// for (let i = 1; i <= 100; i++) {
//     arr.push(i)
// }
//
//
// for (let i = 0; i < 10; i++) {
//     tenNumbers.push(arr[i])
// }
// localStorage.setItem('tenNumbers', JSON.stringify(tenNumbers))
// console.log(tenNumbers)
//
// let div = document.createElement('div')
// div.style.height = '300px'
// div.style.width = '300px'
// div.style.border = '2px solid grey'
//
// let buttonPrev = document.createElement('button')
// buttonPrev.innerText = 'Prev'
// buttonPrev.disabled = true
// buttonPrev.addEventListener('click', function (ev) {
//     ev.preventDefault();
//     newArr = [];
//     buttonNext.disabled = false
//     tenNumbers.forEach(num => {
//         newArr.push(num - 10);
//         if (num - 10 === 1) {
//             buttonPrev.disabled = true;
//         }
//     });
//     tenNumbers = newArr;
//     div.innerText = tenNumbers;
//     localStorage.setItem('tenNumbers', JSON.stringify(tenNumbers));
// })
// let buttonNext = document.createElement('button')
// buttonNext.innerText = 'Next'
//
// buttonNext.addEventListener('click', function (ev) {
//     ev.preventDefault()
//     newArr = [];
//     for (let i = tenNumbers[9] + 1; i <= tenNumbers[9] + 10; i++) {
//         newArr.push(arr[i] - 1)
//         if(i === 100){
//             newArr.pop()
//             newArr.push(100)
//             buttonNext.disabled = true
//         }
//         buttonPrev.disabled = false
//     }
//     tenNumbers = newArr
//     div.innerText = tenNumbers
//     localStorage.setItem('tenNumbers', JSON.stringify(tenNumbers))
// })
// div.append(tenNumbers)
// document.body.append(div, buttonPrev, buttonNext)
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let divId1 = document.createElement('div');
// divId1.id = 'text';
//
// let divId2 = document.createElement('div');
// divId2.id = 'text2';
//
// let divId3 = document.createElement('div');
// divId3.id = 'text3';
//
// let divId4 = document.createElement('div');
// divId4.id = 'text';
//
// let button = document.createElement('button')
// button.innerText = 'deleteId = text'
// button.addEventListener('click', function (ev) {
//     ev.preventDefault()
//     let deleteDiv = document.getElementById('text')
//     console.log(deleteDiv)
//     deleteDiv.remove()
// })
//
// let divElements = [divId1, divId2, divId3, divId4];
// for (const divElement of divElements) {
//     divElement.style.height = '100px';
//     divElement.style.width = '100px';
//     divElement.style.background = 'green';
//     divElement.innerText = `${divElement.id}`;
//     document.body.append(divElement);
// }
// document.body.append(button)


//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let form = document.createElement('form')
// let inputAge = document.createElement('input')
// inputAge.placeholder = 'User Age'
// let button = document.createElement('button')
// button.innerText = 'click'
//
// button.addEventListener('click', function (ev) {
//     ev.preventDefault()
//     if (inputAge.value < 18){
//         alert('вам меньше 18')
//     } else {
//         alert('вам больше 18 или 18 лет')
//     }
// })
//
// form.append(inputAge, button)
// document.body.append(form)


//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// let form = document.createElement('form')
// let inputRow = document.createElement('input')
// inputRow.placeholder = 'количество рядов'
// let inputCell = document.createElement('input')
// inputCell.placeholder = 'количество ячеек'
// let inputValueForRow = document.createElement('input')
// inputValueForRow.placeholder = 'значение ячеек'
// let button = document.createElement('button')
// button.innerText = 'создать таблицу'
//
//
// button.addEventListener('click', function (ev) {
//     ev.preventDefault()
//     let table = document.createElement('table')
//     table.border="1"
//
//     for (let i = 0; i < +inputRow.value; i++) {
//         let tr = document.createElement('tr')
//         table.append(tr)
//         for (let i = 0; i < +inputCell.value; i++) {
//             let td = document.createElement('td')
//             td.innerText = `${inputValueForRow.value}`
//             tr.append(td)
//         }
//
//     }
//
//     document.body.append(table)
// })
//
// form.append(inputRow, inputCell, inputValueForRow, button)
// document.body.append(form)


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let cash = localStorage.getItem('cash') || 100

let div = document.createElement('div')
div.style.height = '200px'
div.style.width = '200px'
div.style.border = '2px solid grey'

div.innerText = `${cash}грн`

let presentDate =  (new Date).getTime()



let localDate = localStorage.getItem('presentData')
console.log(presentDate - localDate)

if(+presentDate - +localDate > 10000){
    cash = +cash + 10
    localStorage.setItem('cash', JSON.stringify(+cash))
    cash = localStorage.getItem('cash')
    localStorage.setItem('presentData', JSON.stringify(presentDate))
} else {
    localStorage.setItem('presentData', JSON.stringify(presentDate))
}



document.body.append(div)
