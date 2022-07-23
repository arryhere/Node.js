
module.exports.a = 5;

module.exports.b = (name) => {
    return `Hello World, ${name}`
}

class c {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName = () => {
        return `My full name is ${this.firstName} ${this.lastName}`
    }
}

function d(age) {
    return `My age is ${age}`
}

module.exports.c = c
module.exports.d = d