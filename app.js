let express = require('express');
let PlannerController = require('./controllers/PlannerController')

let app = express();

// set the view engine [uses views folder by default]
app.set('view engine', 'ejs');

// serve static files
app.use(express.static('./public'));

// run controller
PlannerController(app);

// run server
app.listen(3000);
console.log('Server up and running: Listening to port 3000');