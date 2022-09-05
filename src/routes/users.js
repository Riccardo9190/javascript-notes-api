require('dotenv').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const express = require('express');
const WithAuth = require('../middlewares/auth');

const router = express.Router();
const secret = process.env.JWT_TOKEN;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://js-notes-clnt.herokuapp.com/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(200).json(user);
  
  } catch (error) {
    res.status(500).json({error: "Error registering new user"});
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    
    if (!user)
      res.status(401).json({ error: 'Incorrect email or password' });
    
      else {
      user.isCorrectPassword(password, function (error, same) {
        
        if (!same)
          res.status(401).json({ error: 'Incorrect email or password' });
        
          else {
          const token = jwt.sign({ email }, secret, { expiresIn: '10d' });
          res.json({ user: user, token: token });
        }
      })
    }
  
  } catch (error) {
    res.status(500).json({ error: "Internal error, please try again" });
  }
});

router.put('/', WithAuth, async function (req, res) {
  const { name, email } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { name: name, email: email } },
      { upsert: true, 'new': true }
    )
    res.json(user);
  
  } catch (error) {
    res.status(401).json({ error: error });
  }
});

router.put('/password', WithAuth, async function (req, res) {
  const { password } = req.body;

  try {
    const user = await User.findOne({ _id: req.user._id })
    user.password = password
    user.save()
    res.json(user);
  
  } catch (error) {
    res.status(401).json({ error: error });
  }
});

router.delete('/', WithAuth, async function (req, res) {
  try {
    let user = await User.findOne({ _id: req.user._id });
    await user.delete();
    res.json({ message: 'OK' }).status(201);
  
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
