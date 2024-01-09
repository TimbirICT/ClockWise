const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const timeCardRoutes = require("./TimeCardRoutes");
const timeEventRoutes = require("./TimeEventRoutes");

router.use("/users", userRoutes);
router.use("/timecards", timeCardRoutes);
router.use("/timeevents", timeEventRoutes);

module.exports = router;
