const joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();

app.use(express.json()); //middle ware
app.use(express.urlencode());   //key=value&key=value

app.use(logger);


//next is reference to next middle ware function in the pipe line
const courses = [
    {id: 1, name: 'course1'},  
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},    
    
];


//this take two arguments 
//1) url and 2) call back function
// a function that will be called when we get ht0tp get request
//this call back function have two arguments request and response
app.get('/',( req,res) => {

     res.send('wassusp boiss')


});

app.get('/api/courses',( req,res)=> {
 
    res.send(courses);
});


//in  this we paase dtwo arguments 
// port no. and functin that will pass whne
//the application start listening on the given port  

//we can pass multiple parameter as well as
// :year :months etc
app.get('/api/courses/:id', (req, res)=> {

    //res.send(req.params);
    //array.find() is a method available for all the arrays in javascript
    //req.params.id will return the string that why we used parse int
    const course = courses.find( c=> c.id === parseInt(req.params.id));
    //if course not found
    if(!course){
      res.status(404).send('The course not found.');
    }
    res.send(course);

});

app.post('/api/courses',(req,res) =>{

    const course = {  
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);

});

// STATIC METHOD app.listen(3000, () => console.log('listening on port 3000'));
//env varialbe PORT

const port = process.env.PORT || 3000;
//if dynamically no port is available use 3000
app.listen(port, () => console.log(`listening on port ${port}` ));

//setting the value for env variable 
//export PORT= 5000


