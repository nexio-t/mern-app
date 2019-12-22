const router = require("express").Router();
const videosController = require("../../controllers/videosController");

router.route("/")
  .post(videosController.create)
  .get(videosController.findSaved);

module.exports = router;