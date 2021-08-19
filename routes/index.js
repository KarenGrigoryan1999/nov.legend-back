const {Router} = require("express")
const {MainController} = require("../controllers/mainController")

const router = Router()

router.post("/set_user",MainController.setDate)
router.get("/get_user",MainController.getDate)

module.exports = {router}