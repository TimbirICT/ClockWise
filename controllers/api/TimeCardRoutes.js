const router = require("express").Router();
const { User, TimeCard } = require("../../models");
const withAuth = require("../../utils/auth");

// get all time cards
router.get("/", async (req, res) => {
  try {
    const timeCardData = await TimeCard
      .findAll({
        attributes: ["id", "user_id"],
        include: [
          {
            model: User,
            attributes: ["name"],
          },
        ],
      });
    res.status(200).json(timeCardData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get one time card by id
router.get("/:id", (req, res) => {
  TimeCard.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "user_id"],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((oneTimeCard) => {
      if (!oneTimeCard);
      {
        res.status(404).json({ message: "Unable to find time card" });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
