const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log("Token received:", token); // debug

  if (!token)
    return res.status(401).json({ message: "Not authorized, token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // debug
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.log("JWT verification error:", error.message); // debug
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

module.exports = { protect };
