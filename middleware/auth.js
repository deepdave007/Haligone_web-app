const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Acquire token from header
  const token = req.header('x-auth-token');

  //Check if there is no token
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token found, authorization denied' });
  }

  //Verify the JWT token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
