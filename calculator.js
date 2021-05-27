const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/',function(req,res){
    res.send("thanks for posting");
});
app.listen(3000,()=>{
    console.log("server started at port 3000");
});

app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post('/bmiCalculator',function(req,res){
    var weight= parseFloat(req.body.weight);
    var height= parseFloat(req.body.height);
    var bmi= (weight/((height)*(height)));
    res.send("Your Bmi is :" +bmi);
});