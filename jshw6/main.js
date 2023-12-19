// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let word1 = 'hello world'
let word2 = 'lorem ipsum'
let word3 = 'javascript is cool'
console.log(word1.length)
console.log(word2.length)
console.log(word3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(word1.toUpperCase());
console.log(word2.toUpperCase());
console.log(word3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toUpperCaseWord1 = 'HELLO WORLD'
let toUpperCaseWord2 = 'LOREM IPSUM'
let toUpperCaseWord3 = 'JAVASCRIPT IS COOL'
console.log(toUpperCaseWord1.toLowerCase())
console.log(toUpperCaseWord2.toLowerCase())
console.log(toUpperCaseWord3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   '
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні'

let arrStr2 = str2.split(' ')
console.log(arrStr2)

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
console.log(array.map((item) => item.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11, 21, 3];
let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((num1, num2) => num1 - num2)
        console.log(arr)
    }
    if (direction === 'descending') {
        arr.sort((num1, num2) => num2 - num1)
        console.log(arr)
    }
}
sortNums(nums, 'descending')

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((courses1, courses2) => courses2.monthDuration - courses1.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((item, index) => {
    item.id = index
    return item
}));
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
// - знайти піковий туз
console.log(cards.filter((item) => {
    if (item.cardSuit === 'spade' && item.value === 'ace') {
        return item
    }
}));
// - всі шістки
console.log(cards.filter((item) => {
    if (item.value === '6' || item.value === 6) {
        return item
    }
}))
// - всі червоні карти
console.log(cards.filter((item) => {
    if (item.color === 'red') {
        return item
    }
}));
// - всі буби
console.log(cards.filter((item) => {
    if (item.cardSuit === 'diamond') {
        return item
    }
}));
// - всі трефи від 9 та більше
let cardsClubs = cards.filter((item) => {
    if (item.cardSuit === 'clubs') {
        return item
    }
});
console.log(cardsClubs.filter((item) => {
    if (item.value >= 9 || item.value === '9' || item.value === '10' || item.value === 'jack' || item.value === 'queen' || item.value === 'king' || item.value === 'ace') {
        return item
    }
}));

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(cards.reduce((accumulator, item) => {
    if (item.cardSuit === 'spade') {
        accumulator.spades.push(item)
    } else if (item.cardSuit === 'diamond') {
        accumulator.diamonds.push(item)
    } else if (item.cardSuit === 'heart') {
        accumulator.hearts.push(item)
    } else if (item.cardSuit === 'clubs'){
        accumulator.clubs.push(item)
    }
    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
//
// console.log(coursesArray.map((item) => {
//     console.log(item)
// }).filter((item)=>{
//     for (let i = 0; i < coursesArray.modules.length; i++) {
//         if(coursesArray[i].modules[i] === 'docker'){
//             return coursesArray[0].modules[i]
//         }
//     }
// }))
console.log(coursesArray.filter((item) => {
    for (let i = 0; i < item.modules.length; i++) {
        if (item.modules[i] === 'sass') {
            return item
        }
    }
}));


// --написати пошук всіх об'єктів, в який в modules є docker

console.log(coursesArray.filter((item) => {
    for (let i = 0; i < item.modules.length; i++) {
        if (item.modules[i] === 'docker') {
            return item
        }
    }
}));