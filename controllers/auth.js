const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up.ejs');
})
router.get('/sign-in', (req, res) => {
  res.render('auth/sign-in.ejs');
})
router.get('/sign-out', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
})
// sign up and create a user
router.post('/sign-up', async (req, res) => {
  const userInDatabase = await User.findOne({ email: req.body.email });

  if (req.body.password !== req.body.confirmPassword) {
    return res.send('Password and Confirm Password must match');
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  const hashedConfirmedPassword = bcrypt.hashSync(req.body.confirmPassword, 10);
  req.body.confirmPassword = hashedConfirmedPassword;

  const user = await User.create(req.body);
  res.redirect('/');
})
// authenticate user credentials and sign user in
router.post('/sign-in', async (req, res) => {
  const userInDatabase = await User.findOne({ email: req.body.email });

  if (!userInDatabase) {
    return res.send("Login failed. Please try again.");
  }

  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  );

  if (!validPassword) {
    return res.send("Login failed. Please try again.");
  }

  req.session.user = {
    email: userInDatabase.email,
    firstName: userInDatabase.firstName,
    lastName: userInDatabase.lastName,
    desiredPosition: userInDatabase.desiredPosition,
    location: userInDatabase.location,
  }

  req.session.save(() => {
    res.redirect('/dashboard');
  })
})

module.exports = router;
