const router = require("express").Router();

const apiRoutes = require("./api");
const emailRoutes = require("./email-routes");

router.use("/api", apiRoutes);
router.use("/email", emailRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
