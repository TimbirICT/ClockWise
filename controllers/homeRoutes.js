const withAuth = require("../utils/auth");
const router = require("express").Router();
const { TimeCard, TimeEvent, User } = require("../models");

// GET all time cards for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    // Get all time cards and JOIN with user data and time events
    const userData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: TimeEvent,
          attributes: ["date", "clock_in", "clock_out"],
        },
      ],
    });

    
    const timeCards = timeCardData.map((timeCard) =>
      timeCard.get({ plain: true })
    );

    
    res.render("portal", {
      timeCards,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render("login");
});

// router.get("/timecard/:id", async (req, res) => {
//   try {
//     const dbTimeCardData = await TimeCard.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//         {
//           model: TimeEvent,
//           attributes: ["date", "clock_in", "clock_out"],
//         },
//       ],
//     });

//     const timeCard = dbTimeCardData.get({ plain: true });
//     res.render("partials/timecard", { timeCard });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.post("/events/:timeCardId", async (req, res) => {
//   try {
//     const { date, clock_in, clock_out } = req.body;
//     const timeCardId = req.params.timeCardId;

//     // Create a new time event
//     await TimeEvent.create({
//       date,
//       clock_in,
//       clock_out,
//       time_card_id: timeCardId,
//     });

    
//     res.redirect("/");
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
