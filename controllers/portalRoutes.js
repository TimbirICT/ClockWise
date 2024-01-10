const withAuth = require("../utils/auth");
const router = require("express").Router();
// const sequelize = require('../config/connections')
const { User, TimeCard, TimeEvent } = require("../models");

// route handler for /portal

router.get("/", (req, res) => {
  TimeCard
    .findAll({
      attributes: ["id", "user_id"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: TimeEvent,
          attributes: ["date", "clock_in", "clock_out"],
          order: ["date", "DESC"]
        },
      ],
      where: { user_id: req.session.user_id }
    }).then((dbData) => {
      const timeCardData = dbData.map((tc) => tc.get());
      console.log(timeCardData[0]);
      res.render("portal", timeCardData[0]);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
