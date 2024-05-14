const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send({ msg: 'no token provided' });
  try {
    const verfiedToken = jwt.verify(token, 'secret');
    req.user = verfiedToken.user;
    console.log('User is verified');
    next();
  } catch (error) {
    return res.status(401).send({ msg: 'Token not Valid' });
  }
};
