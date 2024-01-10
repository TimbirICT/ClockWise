const withAuth = require("../utils/auth");
const router = require("express").Router();
// const sequelize = require('../config/connections')
const { User, TimeCard, TimeEvent } = require("../models");
const { Op } = require("sequelize");

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
    }).then(async (dbData) => {
      const timeCardData = dbData.map((tc) => tc.get({plain: true}));
      
      const currentDateEvent = await GetCurrentTimeEventByTimeCardId(timeCardData[0].id);
      console.log(timeCardData[0]);
      timeCardData[0].clock_in = DetermineIfClockedInOrOut(currentDateEvent);
      currentDateEvent == null ? false : true;
      res.render("portal", timeCardData[0]);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

async function GetCurrentTimeEventByTimeCardId(timeCardId) {

console.log(timeCardId);

  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return await TimeEvent.findOne({
    // WHERE date >= [today's date] AND date < [tomorrow's date] AND time_card_id = [timeCardId]
    where: {
      [Op.and]: {
        date: { [Op.and]: { [Op.gte]: today.toDateString(), [Op.lt]: tomorrow.toDateString() } },
        time_card_id: timeCardId
      }
    }
  });
}

function DetermineIfClockedInOrOut(currentDateEvent)
{
  if (currentDateEvent == null) return false;
  if (currentDateEvent.dataValues.clock_out == null) return true;
  return false;
}

module.exports = router;
