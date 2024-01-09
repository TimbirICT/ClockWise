const withAuth = require("../utils/auth");
const router = require("express").Router();
const sequelize = require('../config/connections')
const { User, TimeCard, TimeEvent } = require('../models');

router.get = ('/', withAuth, (req, res) => {
    post.findAll({
        where: {
            user_id: req.user.id
        },
        attributes: [
            'id',
            'name',
            'email',
            'password',
        ],
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
        .then(dbTimeCardData => {
            const timeCards = dbTimeCardData.map(timeCard => timeCard.get({ plain: true }));
        res.render('portal', {timeCards, logged_in: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;