const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const timeCardRoutes = require('./TimeCardRoutes');
const timeEventRoutes = require('./TimeEventRoutes');

router.use('/users', userRoutes);
router.use('/timecard', timeCardRoutes);
router.use('/timeevent', timeEventRoutes)

module.exports = router; 