const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

// load routes
const signin = require("./controllers/signin");
const register = require("./controllers/register");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors middlwware
app.use(cors());


// index/home route: GET
app.get("/", (req, res) => {
  knex.select('*').from('users')
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json(err));
});


// sign in route: POST
app.use(signin);

// register route: POST
app.use(register);

// profile route: GET
app.use(profile);

// image entries route : PUT
app.use(image);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
// .on("error", console.log);