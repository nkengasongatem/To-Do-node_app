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

module.exports = (app) => {    

    app.get('/todo', (req, res) =>{
        res.render('index', { todos: data});
    });

    app.post('/todo', (req, res) =>{

    });

    app.put('/todo', (req, res) =>{

    });

    app.delete('/todo', (req, res) =>{

    });
};
