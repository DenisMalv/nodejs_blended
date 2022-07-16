const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
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
    const decodedData = jwt.verify(splitToken, process.env.JWT_SECRET_KEY);
    req.user = decodedData;
    next();
  } catch (error) {
    res.status(403).json({
      code: 403,
      message: "USER IS NOT AUTHORIZED",
    });
  }
};

module.exports = authMiddleware;
