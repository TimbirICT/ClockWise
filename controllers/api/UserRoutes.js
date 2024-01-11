const router = require("express").Router();
const { User, TimeCard } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    const userData = await newUser.save();
    TimeCard.create({user_id: userData.dataValues.id});

    req.session.user_id = userData.dataValues.id;
    req.session.logged_in = true;

    req.session.save(() => {
      res.status(200).json(userData);
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("userData", userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email, please try again" });
      return;
    }
    console.log(req.body.password + "----------------------------");
    
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json({message: "You have successfully logged out"});
      // res.redirect('/login')
    });
  } else {
    res.status(404).json({message: "There has been an issue"});
  }
});

module.exports = router;
 