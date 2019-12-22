const router = require("express").Router();
const videosController = require("../../controllers/videosController");

router.route("/")
  .post(videosController.create);

module.exports = router;