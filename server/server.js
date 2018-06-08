const express = require("express");
const app = express();
const cors = require("cors");

const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors middlwware
app.use(cors());

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1', // localhost
    user: 'postgres',
    password: 'postgres',
    database: 'faceaxios'
  }
});

knex.select('*').from('users')
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));

const database = {
  users: [
    {
      id: "1234",
      name: "bipin",
      email: "bipin@gmail.com",
      password: "care",
      entries: 0,
      joined: new Date()
    },
    {
      id: "4321",
      name: "sudip",
      email: "sudip@gmail.com",
      password: "shrestha",
      entries: 0,
      joined: new Date()
    }
  ]
}

// index/home route: GET
app.get("/", (req, res) => {
  res.json(database.users);
});


// sign in route: POST
app.post("/signin", (req, res) => {
  // const password = req.body.password;
  // bcrypt.compare(password, hash).then((res) => {
  //   // res === true
  // });
  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("not match");
  }
})

// register route: POST
app.post("/register", (req, res) => {

  // password encryption- hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw new Error;
      req.body.password = hash;

      knex('users')
        .returning('*')
        .insert({
          name: req.body.name,
          email: req.body.email,
          joined: new Date()
        })
        .then(user => {
          res.json(user); //res.json(user[0]);
        })
        .catch(err => res.status(400).json(err.detail));
    });
  });
});

// profile route: GET
app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  let found = false;
  database.users.map(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("User not found");
  }
});

// image entries route : PUT
app.put("/image", (req, res) => {
  const id = req.body.id;
  let found = false;
  database.users.map(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("User not found");
  }
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});