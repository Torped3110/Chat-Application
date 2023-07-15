const express = require("express")
const dbConnection = require("./mongosetup");
const  model = require('./usercontroller')
const msg= require('./messagecontroller')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require("cors");
const login_obj = require('./login')
const app = express()
app.use(cors({
    origin : "*"
  }));
dbConnection.connect(true);
app.get("/", function(req, res) {
  res.send("It's working!")
})
app.post("/check",jsonParser,model.checkuser,model.adduser)
//app.post("/register",jsonParser,model.adduser)

app.post("/login",jsonParser,login_obj.checklogin)

app.post("/get",jsonParser,msg.getMessage)

app.post('/all',jsonParser,model.allUser)

app.post('/add',jsonParser,msg.addMessage)

app.listen(9000, () => {
  console.log("app listening on port 9000")
})