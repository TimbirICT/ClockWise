const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const portalRoutes = require("./portalRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/portal", portalRoutes);

module.exports = router;
