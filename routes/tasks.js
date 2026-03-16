const router = require('express').Router();
const TaskController = require('../controllers/tasks');

//find all tasks
router.get('/', TaskController.index);

//create a new task
router.post('/create', TaskController.create);

//update a task
router.get('/update/:id', TaskController.edit);
router.put('/update/:id', TaskController.update);

//delete a task
router.delete('/delete/:id', TaskController.delete);

module.exports = router;