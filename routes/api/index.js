const router = require("express").Router();
const videoRoutes = require("./videos");

// Book routes
router.use("/books", videoRoutes);

module.exports = router;