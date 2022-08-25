const express = require("express");
const userRouter = express.Router();
const userData = require("../users.json");
const cors = require('cors');


userRouter.get("/", (req, res) => {
  const userArray = userData.map((obj) => new User(obj));

  res.send(userArray);
}); //end of get

class User {
  constructor(user) {
    (this.username = user.username),
      (this.email = user.email),
      (this.bio = user.bio),
      (this.region = user.region)
  }
}

module.exports = userRouter;
