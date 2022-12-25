class Cars {
    static type = 'Car'

    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start() {
        console.log('Машина заведена')
    }
}

class Nissan extends Cars {
    static type = "Japan"

    constructor(options) {
        super(options);
        this.engine = options.engine
    }
}
const nissan = new Nissan({
    model: 'nissan skyline r34',
    color: 'violet',
    wheels: 4,
    engine: 'RB26DETT'
})
console.log(nissan)
nissan.start()

class Yamaha extends Cars {
    static type = 'Japan'
    // static carType = 'Moto'

    constructor(options) {
        super(options);
        this.yearOfIssue = options.yearOfIssue
    }
    start() {
        console.log('Мотоцикл готов!')
    }
}
const yamaha = new Yamaha({
    model: 'Yamaha XSR900',
    color: 'white',
    wheels: 2,
    yearOfIssue: '2019'
})
// console.log(Yamaha.carType)
console.log(yamaha)
yamaha.start()

class Subaru extends Cars {
    static type = 'Japan'

    constructor(options) {
        super(options);
        this.steringWheelType = options.steringWheelType
    }
    start() {
        console.log('Ваша машина ждет, Сэр')
    }
}
const suzuki = new Subaru({
    model: 'Carisma M40S',
    color: 'blue',
    wheels: 4,
    steringWheelType: 'worm'
})
console.log(suzuki)
suzuki.start()
