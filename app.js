const fs=require("fs")
const http=require("http")
const path=require("path")
const exp=require("express")
const { urlencoded } = require("body-parser")
port=80
const app=exp();

//Express specific stuff
app.use('/static', exp.static('FoodDelivery'))
app.use(exp.urlencoded())

//pug specific stuff
app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.post('/', (req, res)=>{
    name = req.body.name
    Number = req.body.Number
    Email = req.body.E-mail
    address = req.body.Address
    // more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${Number} years old, ${Email}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('project.pug', params);

})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});