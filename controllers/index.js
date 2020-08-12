const router = require("express").Router();

const apiRoutes = require("./api");
const emailRoutes = require("./email-routes");
const homeRoutes = require("./home-routes");
const myStuffRoutes = require("./my-stuff-routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/email", emailRoutes);
router.use("/my-stuff", myStuffRoutes);

router.use((req, res) => res.status(404).end());

module.exports = router;
