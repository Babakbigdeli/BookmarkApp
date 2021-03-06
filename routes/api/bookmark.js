const router = require("express").Router();

const BooksController = require("../../controllers/BooksControllers");

router.route("/").get(BooksController.findAll).post(BooksController.create);
router.route("/:id").put(BooksController.update).delete(BooksController.remove);

module.exports = router;
