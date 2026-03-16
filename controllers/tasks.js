const Task = require('../models/tasks');

module.exports = {
    index: async (req, res) => {
        try {
            const tasks = await Task.find({});
            res.render('todo.ejs', { todotasks: tasks });
        } catch (err) {
            console.error(`There was an error: ${err}`);
            res.status(500).send('Server error');
        }
    },
    create: (req,res)=>{
        const firstTask = new Task({title: req.body.title});
        firstTask.save().then(() => res.redirect('/'));
    },
    edit: async (req, res) => {
        try {
            const id = req.params.id;
            const tasks = await Task.find({}); 
            res.render("todoEdit.ejs", { 
                todotasks: tasks, 
                idTask: id 
            });
        } catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    },
    update: (req, res) => {
        const id = req.params.id;
        Task.findByIdAndUpdate(id, { title: req.body.title })
            .then(() => res.redirect('/'))
            .catch(err => {
                console.error(err);
                res.status(500).send(err);
            });
    },
    delete: (req, res) => {
        const id = req.params.id;
        Task.findByIdAndDelete(id)
            .then(() => res.redirect('/'))
            .catch(err => {
                console.error(err);
                res.status(500).send(err);
            });
    }
};
