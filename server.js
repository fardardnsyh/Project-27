const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const authController = require("./controllers/auth.js");
const passUserToView = require("./middleware/pass-user-to-view.js");
const MongoStore = require("connect-mongo");
const fetch = require('node-fetch');

const User = require('./models/user.js');
const Application = require('./models/application.js');

/* CONFIGURATIONS */
const app = express();
app.use(express.static('public'));
// middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
dotenv.config();
// middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// automatically manages session data for each user request and stores them in the database
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
app.use(passUserToView);

// MONGODB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on(`connected`, () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
})

// Quote Garden API fetch request
// const getQuote = async () => {
//   const QUOTE_URL = "https://quote-garden.onrender.com/api/v3/quotes/random";
//   const res = await fetch(QUOTE_URL, ["work"]);
//   const resObj = await res.json();
//   return resObj.data;
// }

/* ROUTES*/
app.get('/', async (req, res) => {
  res.render('index.ejs');
})
// render dashboard and pass applications that are related to the specific user that is logged in
// calls the getQuote API function then passes it to the dashboard view
app.get('/dashboard', async (req, res) => {
  const applications = await Application.find({ createdBy: req.session.user.email });
  res.render('dashboard.ejs', { applications: applications });
})
// render applications page and locates specific applications that are associated with the logged in user
app.get('/application', async (req, res) => {
  const applications = await Application.find({ createdBy: req.session.user.email });
  res.render('./applications/index.ejs', { applications: applications });
})
app.get('/application/new', (req, res) => {
  res.render('./applications/new.ejs');
})
app.get('/application/:applicationId', async (req, res) => {
  const foundApplication = await Application.findById(req.params.applicationId);
  res.render('./applications/show.ejs', { application: foundApplication });
})
app.get('/application/:applicationId/edit', async (req, res) => {
  const applicationToEdit = await Application.findById(req.params.applicationId);
  res.render('./applications/edit.ejs', { application: applicationToEdit })
})
app.post('/application/new', async (req, res) => {
  const application = await Application.create(req.body);
  res.redirect('/application');
})
app.put('/application/:applicationId/edit', async (req, res) => {
  const applicationToEdit = await Application.findByIdAndUpdate(req.params.applicationId, req.body);
  res.redirect(`/application/${req.params.applicationId}`);
})
app.delete('/application/:applicationId', async (req, res) => {
  const application = await Application.findByIdAndDelete(req.params.applicationId);
  res.redirect('/application');
})

const PORT = process.env.PORT || 3003;
app.use("/auth", authController);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
