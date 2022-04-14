var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("new", {
    title: "Página em Express",
    subtitle: "New",
  });
});

module.exports = router;
