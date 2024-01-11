// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//

function CreateUser(id, name, username, email, street, city, zipcode, lat, lng, phone, website, nameCompany,
                    catchPhrase, bs) {
    let address = {street, city, zipcode, geo: {lat, lng}}
    let company = {name: nameCompany, catchPhrase, bs}
    return {id, name, username, email, address, phone, website, company}
}

let user1 = CreateUser(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Gwenborough', '92998-3874',
    '-37.3159', '81.1496', '1-770-736-8031 x56442', 'website', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets')
console.log(user1)


function CreateUser2(id, name, username, email, address = {street, city}) {
    return {id, name, username, email, address}
}

let user2 = CreateUser2(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Gwenborough')
console.log(user2)

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }