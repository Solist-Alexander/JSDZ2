// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => str.match(new RegExp(`.{1,${n}}`, 'g'));
//
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//

let str = 'Каждый охотник желает знать';

function delete_characters(str, length) {
    let substring = str.substring(0, length)
    return substring
}

document.write(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
let str1 = "HTML JavaScript PHP";
let insert_dash = (str) => str.toUpperCase()
    .replaceAll(' ', '-')

document.write(insert_dash(str1));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let toUpperCase = (str) => {
    let strToUpperCase = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        strToUpperCase += str[i]
    }
    return strToUpperCase
}

console.log(toUpperCase('aboba'));
console.log(toUpperCase('фывячс'));

//
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// console.log(n1.replaceAll('.', ' ')
//     .trim());
console.log(n1.replace(/\.+/g, ' '));
console.log(n2.replace(/-+/g, ' '));
console.log(n3.replace(/_+/g, ' '));

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNum = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(randomNum()
    .sort((num1, num2) => num1 - num2));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//

console.log(randomNum()
    .filter((num) => num % 2 === 0 && num !== 0));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str){
//     let word = ''
//     word += str.charAt(0).toUpperCase()
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === ' '){
//          word +=
//         }
//         console.log(word)
//
//     }
//     return word
// }
// capitalize('aboba qwe asd')


function capitalize(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0)
            .toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalize('asd zxc hgdf'));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//

let mailValidator = (email) => {

    if (email.indexOf('@') === -1) {
        return console.log('емейл не подходит')
    } else if (email.lastIndexOf('.') < email.indexOf('@') + 3) {
        return console.log('емейл не подходит точка недостаточно далеко')
    } else {
        console.log(email)
        return email
    }

}
mailValidator('someemail@gmail.com')
mailValidator('someeMAIL@gmail.com')
mailValidator('someeMAIL@i.ua')
mailValidator('some.email@gmail.com')


// - є масив
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
//
//
//- відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//


console.log(coursesArray.sort((obj1, obj2) => obj2.modules.length - obj1.modules.length));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringSearch) => {
    let quantityWord = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringSearch) {
            quantityWord++
        }
    }
    return quantityWord
}
let symb = "о",
    str12 = "Астрономия это наука о небесных объектах";
console.log(count(str12, symb));


//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
let str234 = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) => {
    let arrayWord = str234.split(' ')
    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr.push(arrayWord[i])
    }
   let newString = newArr.join(' ')
    return newString
}
console.log(cutString(str, 5));


//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let booksArray = [
    {
        name: 'qqqqqqqq',
        page: 327,
        authors: ['kira','aboba'],
        genres: ['horror']
    },
    {
        name: 'biba',
        page: 12,
        authors: ['kira'],
        genres: ['horror','horror1']
    },
    {
        name: 'bob',
        page: 62,
        authors: ['kira', 'natasha', 'sasha'],
        genres: ['horror']
    },
    {
        name: 'deathzxc',
        page: 92,
        authors:[ 'kira', 'makiha'],
        genres: ['horror', 'horror1', 'horror2', 'horror3']
    },
    {
        name: 'aboba',
        page: 32,
        authors: ['kira'],
        genres: ['horror', 'horror1', 'horror2']
    },
]

// -знайти наібльшу книжку.
let bookMaxPage = booksArray.sort((book1, book2) => book2.page - book1.page);
console.log(bookMaxPage[0])
// - знайти книжку/ки з найбільшою кількістю жанрів
let bookMaxGenres = booksArray.sort((book1, book2) => book2.genres.length - book1.genres.length)
console.log(bookMaxGenres[0])
// - знайти книжку/ки з найдовшою назвою

let bookMaxNameLength = booksArray.sort((book1, book2) => book2.name.length - book1.name.length)
console.log(bookMaxNameLength[0])

let bookTwoAuthors = []
// - знайти книжку/ки які писали 2 автори
for (const booksArrayElement of booksArray) {
    if(booksArrayElement.authors.length === 2){
        bookTwoAuthors.push(booksArrayElement)
    }
}
console.log(bookTwoAuthors)
// - знайти книжку/ки які писав 1 автор
let bookOneAuthors = []
for (const booksArrayElement of booksArray) {
    if(booksArrayElement.authors.length === 1){
        bookOneAuthors.push(booksArrayElement)
    }
}
console.log(bookOneAuthors)
// - вісортувати книжки по кількості сторінок по зростанню

let bookGrowth = booksArray.sort((book1, book2) => book1.page - book2.page);
console.log(bookGrowth)