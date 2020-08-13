const router = require("express").Router();
const { Object } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Object.findAll({})
    .then((dbObjectData) => res.json(dbObjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Object.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbObjectData) => {
      if (!dbObjectData) {
        res
          .status(404)
          .json({ message: "Sorry. No object was found with this id." });
        return;
      }
      res.json(dbObjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Object.create({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    condition: req.body.condition,
    user_id: req.session.user_id,
  })
    .then((dbObjectData) => res.json(dbObjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Object.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbObjectData) => {
      if (!dbObjectData) {
        res
          .status(404)
          .json({ message: "Sorry. No object was found with this id." });
        return;
      }
      res.json(dbObjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Object.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbObjectData) => {
      if (!dbObjectData) {
        res.status(404).json({
          message: " No object was found with this id",
        });
        return;
      }
      res.json(dbObjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
