const router = require("express").Router();
const { User, TimeCard, TimeEvent } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require("sequelize");

// get all time events
router.get("/", async (req, res) => {
  try {
    const timeEventData = await TimeEvent.findAll();
    res.status(200).json(timeEventData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create new time event
router.post("/", withAuth, async (req, res) => {
  console.log(req.body);

  try {
    const currentTimeEvent = await GetCurrentTimeEventByTimeCardId(req.body.time_card_id);
    console.log(currentTimeEvent);
    if (currentTimeEvent == null) {
      const newTimeEvent = await TimeEvent.create(
        {
          date: req.body.date,
          clock_in: req.body.recorded_time,
          time_card_id: req.body.time_card_id
        });
      console.log(newTimeEvent);
      res.status(200).json(newTimeEvent);
    }
    else {
      const updateTimeEvent = await TimeEvent.update(
        {
          clock_out: req.body.recorded_time
        }, 
        { where: { id: currentTimeEvent.dataValues.id } });
      console.log(currentTimeEvent);
      res.status(200).json(updateTimeEvent);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/hack", async (req, res) => {
  try {
    const newTimeEvent = await TimeEvent.create(req.body);
    res.status(200).json(newTimeEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});


async function GetCurrentTimeEventByTimeCardId(timeCardId) {
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

module.exports = router;