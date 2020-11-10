const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set('view engine','ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",function(req, res){
  res.sendFile(__dirname+ "/index.html")
});

app.listen(3000, function(){
  console.log("The server was started on port 3000");
});
