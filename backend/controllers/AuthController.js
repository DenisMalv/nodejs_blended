// регистрация сохранение пользователя в БД.
// авторизация сравнение логин и пароль пользователя, с теми что у нас в БД.
// аутентификация проверка прав доступа.
// разлогинивание делаем пользователя не аутентифицырованным.

const asyncHandler = require("express-async-handler");
const Driver = require("../models/driver");
const Role = require("../models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthController {
  signUp = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("FILL ALL FIELDS");
    }

    const candidate = await Driver.findOne({ email });
    if (candidate) {
      res.status(400);
      throw new Error("USER ALREADY IN DB");
    }

    const driver = await Driver(req.body);
    const hashPassword = bcrypt.hashSync(password, 5);
    driver.password = hashPassword;
    const userRole = await Role.findOne({ value: "ADMIN" });
    driver.roles = [userRole.value];
    await driver.save();
    if (driver) {
      res.status(201).json({
        code: 201,
        data: driver,
      });
    }
  });

  signIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("ENTER LOGIN AND PASSWORD");
    }

    const candidate = await Driver.findOne({ email });
    if (!candidate) {
      res.status(404);
      throw new Error("USER NOT FOUND");
    }
    const validPassword = bcrypt.compareSync(password, candidate.password);
    if (!validPassword) {
      res.status(400);
      throw new Error("WRONG LOGIN OR PASSWORD");
    }
    candidate.token = this.generateToken(candidate._id, candidate.roles);
    await candidate.save();
    res.status(200).json({
      code: 200,
      data: candidate,
    });
  });
  logOut = asyncHandler(async (req, res) => {
    const token = req.headers.authorization;
    const splitToken = token.split(" ")[1];
    if (!token.startsWith("Bearer") || !splitToken) {
      res.status(403);
      throw new Error("USER IS NOT LOGIN");
    }
    const { id } = jwt.verify(splitToken, process.env.JWT_SECRET_KEY);
    const driver = await Driver.findById(id);
    if (!driver) {
      res.status(404);
      throw new Error(`USER WITH ${id} NOT AUTHORIZED`);
    }
    driver.token = null;
    await driver.save();
    res.status(200).json({
      code: 200,
      message: "logout success",
    });
  });

  generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2h",
    });
  };
}

module.exports = new AuthController();
