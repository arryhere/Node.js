const express = require('express');
const PeopleController = require('../controller/PeopleController');

const peopleController = new PeopleController();

const router = express.Router();

// router.get('/', peopleController.getPeople);
// router.post('/', peopleController.postPeople);
// router.put('/:id', peopleController.updatePeople);
// router.delete('/:id', peopleController.deletePeople);

router.route('/').get(peopleController.getPeople).post(peopleController.postPeople);
router.route('/:id').put(peopleController.updatePeople).delete(peopleController.deletePeople);

module.exports = router;