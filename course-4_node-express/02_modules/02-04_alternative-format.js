module.exports.items = ['item-1','item-2', 'item-3'];

const person = {
    name: 'Haris'
}
module.exports.singlePerson = person;       // module.exports acting like a object getting both items and person
                                            // if only module.exports = person, it will only export person and not items
