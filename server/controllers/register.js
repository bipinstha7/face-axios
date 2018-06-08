const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const knex = require("../db/db");

router.post("/register", (req, res) => {

  if(!req.body.email || !req.body.name || !req.body.password) {
    return res.status(400).json("incorrect form submission");
  }

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
})

module.exports = router;