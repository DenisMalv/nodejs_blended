const router = require("express").Router();
const AuthController = require("../controllers/AuthController");

// сохранить
// получить всех
// получить одного
// обновить
// удалить

router.post("/registration", AuthController.signUp);
router.post("/login", AuthController.signIn);
router.get("/logout", AuthController.logOut);

module.exports = router;
