// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = ['a',2,5,1,6,false, true, '32', 'asdasd', null]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'book1',
    pageCount: 14,
    genre: 'thriller'
}
let book2 = {
    title: 'book2',
    pageCount: 14,
    genre: 'horror'
}
let book3 = {
    title: 'book3',
    pageCount: 145,
    genre: 'comedy'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'book1',
    pageCount: 14,
    genre: 'thriller',
    authors: [
        {
            name: 'ronan',
            age: 23
        },
        {
            name: 'norman',
            age: 44
        }
    ]
}
let book5 = {
    title: 'book2',
    pageCount: 14,
    genre: 'horror',
    authors: [
        {
            name: 'ronan',
            age: 43
        },
        {
            name: 'norman',
            age: 44
        }
    ]
}
let book6 = {
    title: 'book3',
    pageCount: 45,
    genre: 'comedy',
    authors: [
        {
            name: 'aboba',
            age: 23
        },
        {
            name: 'alexander',
            age: 44
        }
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let array2 = [
    {
        name: 'aboba1',
        username:'normis',
        password:'qwer123'
    },
    {
        name: 'aboba2',
        username:'normis',
        password:'123321'
    },
    {
        name: 'aboba3',
        username:'normis',
        password:'12asd1'
    },
    {
        name: 'aboba4',
        username:'normis',
        password:'12FAWQ21'
    },
    {
        name: 'aboba5',
        username:'normis',
        password:'12as3321dfs'
    },
    {
        name: 'aboba6',
        username:'normis',
        password:'2qwdq1'
    },
    {
        name: 'aboba7',
        username:'normis',
        password:'ZXCVB'
    },
    {
        name: 'aboba8',
        username:'normis',
        password:'1ASDFQads'
    },
    {
        name: 'aboba9',
        username:'normis',
        password:'1qwdaxz'
    },
    {
        name: 'aboba10',
        username:'normis',
        password:'nfnmzyfDS1'
    },
]
console.log(array2[0].password)
console.log(array2[1].password)
console.log(array2[2].password)
console.log(array2[3].password)
console.log(array2[4].password)
console.log(array2[5].password)
console.log(array2[6].password)
console.log(array2[7].password)
console.log(array2[8].password)
console.log(array2[9].password)
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1
let a1 = 1
let a2 = 0
let a3 = -3

if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

if(a1 !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

if(a2 !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

if(a3 !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 44

if(time >= 0 && time <= 15){
    console.log('попадає час в першу четверть')
} else if (time >= 16 && time <= 30){
    console.log('попадає час в другу четверть')
} else if (time >= 31 && time <= 45){
    console.log('попадає час в третю четверть')
} else if (time >= 46 && time <= 59){
    console.log('попадає час в четверту четверть')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 3

if(day >= 1 && day <= 10){
    console.log('попадає день на першу частину місяця')
} else if (day >= 11 && day <= 20) {
    console.log('попадає день на другу частину місяця')
}
else if (day >= 21 && day <= 31) {
    console.log('попадає день на третю частину місяця')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfTheWeek = prompt('напишите день недели от 1 до 7')

switch (+dayOfTheWeek){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        dayName = "Невірне число";
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

let number1 = prompt('напишите первое число')
let number2 = prompt('напишите второе число')

if(number1 > number2){
    console.log('первое число больше')
} else if (number1 < number2){
    console.log('второе число больше')
} else if (number1 === number2 ){
    console.log('числа одинаковые')
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = 3

x1 = x1 || 'default'
console.log(x1)

//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер')
} else {
    console.log('error')
}












