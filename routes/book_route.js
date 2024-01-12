const express = require("express")
const router = express.Router()

const book_controller = require('../controllers/book_controller')

router.get("/", book_controller.getAll)
router.get("/:id", book_controller.getById)
router.post("/", book_controller.create)
router.put("/:id", book_controller.updateById)
router.delete("/:id", book_controller.deleteById)

module.exports = router