const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res) => {
    console.log(req.body)
    var number1 = req.body.num1;
    var number2 = req.body.num2;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var result = number1 + number2;
    res.send(`The addition of the 2 numbers is ${result}`);
    
})

app.get("/bmiCalculator",(req,res)=>{
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator",(req,res)=>{
    console.log(req.body)
    var height = parseFloat(req.body.value1);
    var weight = parseFloat(req.body.value2);

    var bmi = weight/(height*height);

    res.send(`The BMI of your body is ${bmi}`);
})






app.listen(port, () => {
  console.log(`The Server started on ${port}`);
});
