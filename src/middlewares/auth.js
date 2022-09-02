require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = process.env.JWT_TOKEN;

const WithAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.status(401).json({ error: "Unauthorized: no token provided" });
  } else {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        res.status(401).json({ error: "Unauthorized: token invalid" });
      } else {
        req.email = decoded.email;
        User.findOne({ email: decoded.email })
          .then(user => {
            req.user = user;
            next();
          })
          .catch(error => {
            res.status(401).json({ error: 'error' })
          })
      }
    })
  }
};

module.exports = WithAuth;
