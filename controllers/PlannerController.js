let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// connect to mlab [cloud database]
mongoose.connect('mongodb://nkengasong:planner2018@ds115244.mlab.com:15244/todo');

// data schema
const todoSchema = new mongoose.Schema({item: String});

// create todo model
let Todo = mongoose.model('Todo', todoSchema);
/*
let item1 = Todo({item: 'Go for weekend next week'}).save((err) => {
    if (err) throw err;
    console.log('Item saved');
});
let data = [
    {item: 'Finish my chinese assignment'},
    {item: 'Start working on GIS project'},
    {item: 'Go for weekend next week'},
    {item: 'Summit Enterprise Creation Assignment'},
    {item: 'Continue learning Microservices with Java'},
    {item: 'Text my friends in Dschang'},
    {item: 'Call aunt to check on grandpa'},
    {item: 'Learn how to secure node api'}
    ];
*/

// body-parser to parse json objects
let urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = (app) => {    

    app.get('/todo', (req, res) =>{
        // get data from mongodb
        var data = Todo.find({}, (err, data)=>{
            if (err) throw err;
            res.render('index', { todos: data});
        });        
    });

    app.post('/todo', urlencodedParser, (req, res) =>{
        // get data from the view and add it to the view
        let item = Todo(req.body).save((err, data) => {
            if (err) throw err;   
            res.json(data);
            console.log('Item saved');
        });
    });
    
    app.delete('/todo/:item', (req, res) =>{
        // delete the requested item from mongodb
        Todo.findOneAndRemove({item: req.params.item.replace(/\-/g," ")}, (err, data) => {
            if (err) throw err;   
            res.json(data);
            console.log('Item saved');
        });
    });
};
