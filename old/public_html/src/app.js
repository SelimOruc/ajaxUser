var express = require ("express");
var fs = require ("fs");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded ({extended: false}));


app.set ("views", "src/views");
app.set ("view engine","jade");
app.get ("/", function(req, res){
    fs.readFile("./resources/users.json" , function (err,data){
      if (err){
        console.log(err);
    }
        var parsedData = JSON.parse(data);
        // console.log(parsedData) //dit word gezien in het gitbash
        res.render("index",{users : parsedData.userArr})  ;
    });
});

app.get("/form", function (req, res){
    fs.readFile("./resources/users.json", function (err, data){
        if (err)
        {console.log(err)}
        
        var parsedData = JSON.parse(data);
        res.render("form", {users : parsedData.userArr.firstname});
    });
});

app.get("/add", function (req,res){
      res.render("add");
  });



app.post("/form", function(req,res){
       fs.readFile("./resources/users.json", function (lees, data){
            var name = req.body.name 
            var parsedData = JSON.parse(data)
            parsedData.userArr.forEach(function (data){
                if (name == data.firstname || name == data.lastname)
                {
                    res.send("hallo u are " + name);
                }
                else
                {
                    res.send("stop fcking it up dude");
                }
            });
    }) 
})
  
  
app.post("/index", function (req, res){
    fs.readFile("./resources/users.json" ,function (error, data){
        if (error)
        {
            throw error
        }
       var fname = req.body.fname
       var lname = req.body.lname
       var email = req.body.email

       var parsedData = JSON.parse(data)
       parsedData.userArr.push({
                     "firstname": fname,
                     "lastname": lname,
                     "email": email
       })
       
       fs.writeFile("./resources/users.json" , JSON.stringify(parsedData) ,function(err){
           if (err){
           console.log(err)
       }
       res.render("/",{users : parsedData.userArr})  
       })
       res.send(parsedData)
    })
})
  
  
  
var server = app.listen(3000 , function (){
    
        console.log("example app listening on port : " + server.address().port)
})