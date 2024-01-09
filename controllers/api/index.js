const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const timeCardRoutes = require("./TimeCardRoutes");
const timeEventRoutes = require("./TimeEventRoutes");
const homeRoutes = require("../homeRoutes");

router.use("/users", userRoutes);
router.use("/timecards", timeCardRoutes);
router.use("/timeevents", timeEventRoutes);
router.use('/', homeRoutes);

module.exports = router;
