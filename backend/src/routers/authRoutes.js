const express = require('express');
const router = express.Router();
const User = require('../models/authModels');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
const { validationResult, check } = require('express-validator');

router.get('/current', auth, async (req, res) => {
  let user = req.user;
  console.log(user);
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(400).json('User not found');
    else res.status(200).json(user);
  } catch (error) {}
});

router.post('/signup', async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      res.status(400).json({ err: 'Password doesnot match' });
    }

    const user1 = await User.findOne({ username });
    if (user1) {
      res.status(400).json('User Already Exits');
    }

    const newUser = new User({
      fullname,
      username,
      password,
      confirmpassword,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    const payload = {
      user: {
        _id: newUser.id,
      },
    };
    jwt.sign(payload, 'secret', { expiresIn: '1h' }, (error, token) => {
      if (!error) {
        res
          .status(200)
          .json({ token: token, message: 'User register Succesfully' });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Server not found' });
  }
});

router.post(
  '/login',
  [
    check('username', 'please include valid username'),
    check('password', 'password is required').exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid  Credentials' }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      console.log(user.id);

      const payload = {
        user: {
          _id: user.id,
        },
      };

      jwt.sign(payload, 'my secret', { expiresIn: '3h' }, (err, token) => {
        if (err) throw err;
        console.log(token);
        res.json({ token });
      });
      res.status(200).json({ msg: 'Logged in sussfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ err: 'Server not found' });
    }
  }
);

router.post('/logout', async (req, res) => {
  try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
