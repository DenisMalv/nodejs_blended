const jwt = require("jsonwebtoken");
module.exports = (rolesArray) => {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization;
      const splitToken = token.split(" ")[1];
      if (!token.startsWith("Bearer") || !splitToken) {
        res.status(403);
        throw new Error("USER IS NOT LOGIN");
      }
      const { role: userRoles } = jwt.verify(
        splitToken,
        process.env.JWT_SECRET_KEY
      );
      let hasRole = false;
      userRoles.forEach((role) => {
        if (rolesArray.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res
          .status(403)
          .json({ code: 403, message: "YOU DONT HAVE ACCESS" });
      }
      next();
    } catch (error) {
      res.status(403).json({
        code: 403,
        message: "USER IS NOT AUTHORIZED",
      });
    }
  };
};
