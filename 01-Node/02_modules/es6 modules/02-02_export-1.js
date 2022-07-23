export const a1 = 28;

export const b1 = (name) => {
    return `Hello World, ${name}`
}

export class c1 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName = () => {
        return `My full name is ${this.firstName} ${this.lastName}`
    }
}

export function d1(age) {
    return `My age is ${age}`
}