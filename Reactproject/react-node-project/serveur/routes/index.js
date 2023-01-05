const express = require("express");
const router = express.Router();
const middleware = require("../middleware");


router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
