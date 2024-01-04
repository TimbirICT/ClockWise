const router = require("express").Router();
const { User, TimeCard, TimeEvent } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const timeEventData = await TimeEvent.findAll();
    res.status(200).json(timeEventData);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
