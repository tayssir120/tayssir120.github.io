const express = require("express");
const router = express.Router();
var passport = require("passport");
const middleware = require("../middleware");
const signUpTemplate = require('../models/user')
const {
  userSignUpValidationRules,
  userSignInValidationRules,
  validateSignup,
  validateSignin,
} = require("../config/validator");


router.post(
  "/signup",
  async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
      const signUpUser = new signUpTemplate({
        username:req.query.username,
        email:req.query.email,
        password:req.query.password
      })
      signUpUser.save()
      .then(data =>{
        res.json(data)
      })
    } catch (err) {
      console.log(err);
      req.flash("error", err.message);
      return res.redirect("/");
    }
  }
);


router.post(
  "/signin",
  async (req, res) => {
    try {
      let favoris = await Favoris.findOne({ user: req.user._id });
      if (req.session.favoris && !favoris) {
        const favoris = await new Favoris(req.session.favoris);
        favoris.user = req.user._id;
        await favoris.save();
      }
      if (favoris) {
        req.session.favoris = favoris;
      }
    } catch (err) {
      console.log(err);
      req.flash("error", err.message);
      return res.redirect("/");
    }
  }
);

router.get("/profile", middleware.isLoggedIn, async (req, res) => {
  try {
    res.render("user/profile", {
      pageName: "User Profile",
    });
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
});

// GET: logout
router.get("/logout", middleware.isLoggedIn, (req, res) => {
  req.logout();
  req.session.favoris = null;
  res.redirect("/");
});


module.exports = router;
