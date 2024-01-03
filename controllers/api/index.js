const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const timeCardRoutes = require('./TimeCardRoutes')

router.use('/users', userRoutes);
router.use('/timecard', timeCardRoutes);

module.exports = router;