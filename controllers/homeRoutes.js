const withAuth = require("../utils/auth");
const router = require("express").Router();
const { TimeCard, TimeEvent, User } = require("../models");

// GET all time cards for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/portal"); 
      return;
    }
    
    res.render("login", {
      timeCards,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/portal"); 
    return;
  }
  res.render("signup");
});


// get login page to render
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/portal"); 
    return;
  }
  res.render("login");
});

// once user logged ot redirect to login page
router.get('/logout', (req,res) => {
  res.redirect("/login")
})

module.exports = router;
