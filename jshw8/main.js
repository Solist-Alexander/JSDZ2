// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    return {id, name, surname, email, phone}
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arrUser = []
arrUser.push(new User(1, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(3, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(4, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(2, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(5, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(9, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(7, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(10, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(8, 'aboba', 'arboba', 'gmail', '09823134'))
arrUser.push(new User(6, 'aboba', 'arboba', 'gmail', '09823134'))
console.log(arrUser)


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(arrUser.filter((obj1) => obj1.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(arrUser.sort((user1, user2) => user1.id - user2.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}


// - створити пустий масив, наповнити його 10 об'єктами Client

let arrClient = []

arrClient.push(new Client(1, 'tany', 'aboba', 'gmail', '01331', ['asda']))
arrClient.push(new Client(2, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asd', 'asda', 1331, 131]))
arrClient.push(new Client(3, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asd', 'asda']))
arrClient.push(new Client(4, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asd', 'asda']))
arrClient.push(new Client(5, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asd', 'asda', 1313]))
arrClient.push(new Client(6, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asda']))
arrClient.push(new Client(7, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asd', 'asda']))
arrClient.push(new Client(8, 'tany', 'aboba', 'gmail', '01331', [12, 'asda']))
arrClient.push(new Client(9, 'tany', 'aboba', 'gmail', '01331', [12, 423, 'asd', 'asda']))
arrClient.push(new Client(10, 'tany', 'aboba', 'gmail', '01331', [12, 'asd', 'asda']))
console.log(arrClient)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(arrClient.sort((client1, client2) => client1.order.length - client2.order.length));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function ConstructorCar(propertiesModel, manufacturer, yearCar, maxSpeed, engineSize) {
    function drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
    }
    function info(){
        console.log(
            `властивость модели - ${this.propertiesModel}\nвиробник - ${this.manufacturer}\nрік випуску - ${this.yearCar}\nмаксимальна швидкість - ${this.maxSpeed}km\nоб'єм двигуна - ${this.engineSize}`)
    }
    function increaseMaxSpeed(newSpeed){
        if (newSpeed < this.maxSpeed) {
            return console.error('нужно назначить скорость, которое будет превышать прошлое значение ')
        } else {
            this.maxSpeed = newSpeed + 'km'
            console.log(`новое значение максимальной скорости ${this.maxSpeed}`)
        }
    }
    function changeYear(newYear){
        console.log(`новое значение года машины ${newYear}`)
        this.yearCar = newYear
    }
    function addDriver(driver){
        return this.driver = driver
    }
    return {propertiesModel, manufacturer, yearCar, maxSpeed, engineSize,drive,info,increaseMaxSpeed,changeYear,addDriver}
}

let car2 = new ConstructorCar('едит', 'KMS', '2000', '70', '20')

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car2.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car2.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car2.increaseMaxSpeed(200)

// -- changeYear (newValue) - змінює рік випуску на значення newValue
car2.changeYear('2023')

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car2.addDriver({name: 'kira', year: 20, status: false})
console.log(car2)

//

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('-----------------------------------------------------')

class Car {
    constructor(propertiesModel, manufacturer, yearCar, maxSpeed, engineSize) {
        this.propertiesModel = propertiesModel
        this.manufacturer = manufacturer
        this.yearCar = yearCar
        this.maxSpeed = maxSpeed
        this.engineSize = engineSize
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
    }

    info() {
        console.log(
            `властивость модели - ${this.propertiesModel}\nвиробник - ${this.manufacturer}\nрік випуску - ${this.yearCar}\nмаксимальна швидкість - ${this.maxSpeed}km\nоб'єм двигуна - ${this.engineSize}`)
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed < this.maxSpeed) {
            return console.error('нужно назначить скорость, которое будет превышать прошлое значение ')
        } else {
            this.maxSpeed = newSpeed + 'km'
            console.log(`новое значение максимальной скорости ${this.maxSpeed}`)
        }
    }

    changeYear(newYear) {
        console.log(`новое значение года машины ${newYear}`)
        this.yearCar = newYear
    }

    addDriver(driver) {
        return this.driver = driver
    }
}

let car1 = new Car('летает', 'BMW', '1983', '90', '45')
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car1.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car1.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car1.increaseMaxSpeed(110)
car1.info()
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear(1932)
car1.info()
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car1.addDriver({name: 'aboba', year: 34, status: true})
console.log(car1)

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Queen(name,year,sizeFoot){
    return{name,year,sizeFoot}
}
let arrQueens = []
arrQueens.push(new Queen('kira', 23, 40))
arrQueens.push(new Queen('natasha', 23, 10))
arrQueens.push(new Queen('sasha', 23, 12))
arrQueens.push(new Queen('nasty', 23, 10))
arrQueens.push(new Queen('ira', 23, 20))
arrQueens.push(new Queen('alina', 23, 34))
arrQueens.push(new Queen('liza', 23, 11))
arrQueens.push(new Queen('diana', 23, 20))
arrQueens.push(new Queen('sveta', 23, 19))
arrQueens.push(new Queen('any', 23, 11))

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,year,shoe) {
        this.name = name
        this.year = year
        this.shoe = shoe
    }
}

let prince = new Prince('aboba', 23, 11)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const queenElement of arrQueens) {
    if(prince.shoe === queenElement.sizeFoot){
        console.log(`принц ${prince.name} нашел туфлю принцессы ${queenElement.name}`)
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(arrQueens.find((queen)=> prince.shoe === queen.sizeFoot))