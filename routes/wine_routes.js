const express = require("express");

const router = express.Router();
const {
  add_wine, update_wine, get_wines, delete_wine
} = require("../controllers/wine_controller");
const { authorize_user } = require("../middlewares/auth_middleware");

router.post("/add", authorize_user, add_wine);
router.put("/edit/:id", authorize_user, update_wine);
router.get("/list", authorize_user, get_wines);
router.delete("/delete/:id", authorize_user, delete_wine);

module.exports = router;