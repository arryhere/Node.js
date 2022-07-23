export const a2 = 5;

export const b2 = (name) => {
    return `Hello World, ${name}`
}

export default class c2 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName = () => {
        return `My full name is ${this.firstName} ${this.lastName}`
    }
}

export function d2(age) {
    return `My age is ${age}`
}