let { people } = require('../public/data')

class PeopleController {
    getPeople = (req, res) => {
        res.status(200).json({
            success: true,
            data: people
        })
    }

    postPeople = (req, res) => {
        const { name } = req.body
        if (!name) {
            return res.status(400).json({ success: false, message: 'please provide name value' })
        }
        res.status(201).send({ success: true, person: name })
    }

    updatePeople = (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        const person = people.find((e) => {
            return e.id === Number(id);
        })
    
        if (!person) {
            res.status(404).json({ success: false, message: 'Person not found' });
        } else {
            // res.status(200).json({ success: true, data: {...person, name} });
            const newPeople = people.map((e) => {
                if (e.id === Number(id)) {
                    e.name = name;
                    return e;
                } else {
                    return e;
                }
            })
            res.status(200).json({ success: true, data: newPeople });
        }
    }

    deletePeople = (req, res) => {
        const { id } = req.params;
        const person = people.find((e) => {
            return e.id === Number(id);
        });
        if (!person) {
            res.status(404).json({ success: false, message: 'Person not found' });
        } else {
            const newPeople = people.filter((e) => {
                return e.id !== Number(id)
            })
            res.status(200).json({ success: true, data: newPeople });
        }
    }
}

module.exports = PeopleController;