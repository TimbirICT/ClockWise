const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const portalRoutes = require("./portalRoutes");
const timeeventRoutes = require("./api/TimeEventRoutes")

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/portal", portalRoutes);
router.use("/timeevents", timeeventRoutes)

module.exports = router;
