const router = require('express').Router();
const { User, TimeCard } = require('../../models');
const withAuth = require('../../utils/auth');

// get all time cards
router.get('/', (req, res) => {
    TimeCard.findAll({
        attributes: [
            'id',
            'user_id',
            'clock_in',
            'clock_out',
            'date',
        ],
        order: [['date', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    }),
    .then((allTimeCards) => res.json(allTimeCards))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
});

// get one time card by id
router.get('/:id', (req, res) => {
    TimeCard.findOne({
        where: {
            id: req.params.id,
        },
        attributes: [
            'id',
            'user_id',
            'clock_in',
            'clock_out',
            'date',
        ],
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    })
    .then((oneTimeCard) => {
        if(!oneTimeCard);
        {
            res.status(404).json({ message: "Unable to find time card"});
            return;
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
