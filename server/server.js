const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const database = {
  users: [
    {
     id: "1234",
     name: "bipin",
     email: "bipin@gmail.com",
     password: "shrestha",
     entries: 0,
     joined: new Date()
    }
  ]
}

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", (req, res) => {
  if(req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.json("success");
  } else {
    res.status(400).json("not match");
  }
})

app.post("/register", (req, res) => {
  const newUser = {
    id: "4433",
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    entries: 0,
    joined: new Date()
  }
  database.users.push(newUser);
  res.json(database.users[database.users.length-1]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});