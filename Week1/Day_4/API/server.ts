//create an express server

import express from 'express'; //import express
const app = express(); //create an express instance

//create an endpoint using get/post/put/delete

//hello endpoint -- http://localhost:3400/Hello
app.get('/Hello',(req,res)=>{

    res.write('Hello response from the express server'); //return a response
    res.write('Please end this message');

    res.end(); //end the message
});

//Users endpoint -- http://localhost:3400/users
app.get('/users',(req,res) => {

    res.write('Response from Users endpoint');
    res.end();
});

//courses endpoint -- http://localhost:3400/courses
app.get('/courses',(req,res) => {
    var courses = ['JS','React','typescript'];
    //res.write(courses);
    //res.end();
    res.send(courses);
});

//prod endpoint -- http://localhost:3400/prod
app.get('/prod',(req,res)=>{
    var product = {
        "id":"P100",
        "name":"Laptop",
        "price":57896
    }
    res.send(product);

});

//Creating an endpoint with path parameters - http://localhost:3400/par/100
 app.get('/par/:id',(req,res)=>{
    res.send('Hello, Your Par endpoint Id is: ' + req.params.id);
 });

 //Creating an endpoint with query string param - http://localhost:3400/qry/myid?id=3
 app.get('/qry/myid',(req,res)=>{
    res.send('Hello,Your Qry endpoint Id is: ' + req.query.id);
 });

 //Post Request
 //Creating an endpoint for a Post Request
 //use is a middleware function

 app.use(express.json());

 app.post('/login',(req,res) =>{
    console.log('Creating an endpoint for a Login Post Request',req.body.user);
    const obj = req.body.user;
    res.json({result:obj});
 });

 //JSON Product Post Request
 app.post('/createprod', (req,res) => {
    const obj = req.body.product
    res.json({result:obj});
 });

//Listen to a port
const Port = 3400; //declare the port variable
app.listen(Port,'127.0.0.1',()=>{
    console.log(`Server is running at port no. ${Port}`);
});