// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users => {
    for (const user of users) {
    let div = document.createElement('div')
        div.style.height = '100px'
        div.style.width = '230px'
        div.style.border = '2px solid  grey'
        div.innerText = `id: ${user.id}\nname: ${user.name}\n`
        let a = document.createElement('a')
        a.innerText = `перейти к информации пользователя`
        a.href = `user-details.html?id=${user.id}`
        div.append(a)
        document.body.append(div)
    }
})
let url = new URL(location.href)