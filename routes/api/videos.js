const router = require("express").Router();
const videosController = require("../../controllers/videosController");

router.route("/")
  .post(videosController.create)
  .get(videosController.findSaved);

router.route("/:id")
  .delete(videosController.deleteVideo); 

module.exports = router;