const express = require("express");
const router = express.Router();

const knex = require("knex");

router.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  knex.select('*').from('users').where({ id: id })
    .then(user => {
      if (user[0]) {
        res.json(user[0]);
      } else {
        res.status(400).json("User not found");
      }
    })
    .catch(res.status(400).json("Error getting user"));
})

module.exports = router;