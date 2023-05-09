var express = require("express");
const { getUsers } = require("../models/users");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const users = await getUsers();
  res.render("index", { title: "Express", users });
});

module.exports = router;
