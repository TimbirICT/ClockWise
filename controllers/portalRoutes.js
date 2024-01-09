const withAuth = require("../utils/auth");
const router = require("express").Router();
// const sequelize = require('../config/connections')
const { User, TimeCard, TimeEvent } = require("../models");

// route handler for /portal

router.get("/", async (req, res) => {
  try {
    const timecardData = await TimeCard.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: TimeEvent,
          attributes: ["date", "clock_in", "clock_out"],
        },
      ],
    });
    res.render("portal", {
        timecardData,
        // logged_in: req.session.logged_in,
      })
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
