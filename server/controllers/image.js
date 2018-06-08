const express = require("express");
const router = express.Router();

const knex = require("../db/db");


router.put("/image", (req, res) => {
  const id = req.body.id;

  knex('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => res.json({ "entries": entries[0] }))
    .catch(err => console.log(err));
})

module.exports = router;