const router = require("express").Router();
const { User, TimeCard, TimeEvent } = require("../../models");
const withAuth = require("../../utils/auth");

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
    const newTimeEvent = await TimeEvent.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newTimeEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
