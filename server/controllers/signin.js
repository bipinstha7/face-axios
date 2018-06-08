const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const knex = require("../db/db");

router.post("/signin", (req, res) => {
  if(!req.body.email || !req.body.password) {
    return res.status(400).json("incorrect form submission");
  }

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

module.exports = router;