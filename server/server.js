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




// index/home route: GET
app.get("/", (req, res) => {
  knex.select('*').from('users')
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json(err));
});


// sign in route: POST
app.post("/signin", (req, res) => {
  const password = req.body.password;
 
  knex.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(user => {
      bcrypt.compare(password, user[0].hash)
        .then((isMatch) => {
          if(isMatch) {
            return knex.select('*').from('users')
                    .where('email', '=', req.body.email)
                    .then(user => {
                      res.json(user[0]);
                    })
                    .catch(err => res.status(404).json("No such user found"));
          }
          res.status(400).json("wrong credentials");
        })
        .catch(err => res.status(400).json("unble to complete request"));
    })
    .catch(err => res.status(400).json("no such user"));
})

// register route: POST
app.post("/register", (req, res) => {

  // password encryption- hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw new Error;
      req.body.password = hash;

      knex.transaction(trx => {
        trx.insert({
          hash: req.body.password,
          email: req.body.email
        })
        .into('login')
        .returning('email')
        .then(loginemail => {
          return trx('users')
                  .returning('*')
                  .insert({
                    name: req.body.name,
                    email: loginemail[0],
                    joined: new Date()
                  })
                  .then(user => {
                    res.json(user[0]);
                  })
                  .catch(err => res.status(400).json(err.detail));
        })
        .then(trx.commit)
        .catch(trx.rollback);
      })
      .catch(err => res.status(400).json("unable to register"));
    });
  });
});

// profile route: GET
app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  knex.select('*').from('users').where({ id: id })
    .then(user => {
      if (user[0]) {
        res.json(user[0]);
      } else {
        res.status(400).json("User not found");
      }
    })
    .catch(err => res.status(400).json("Error getting user"));
});

// image entries route : PUT
app.put("/image", (req, res) => {
  const id = req.body.id;

  knex('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => res.json({ "entries": entries[0] }))
    .catch(err => console.log(err));
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
// .on("error", console.log);