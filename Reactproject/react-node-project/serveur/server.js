require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const logger = require("morgan");
const mongoose = require("mongoose");
var MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const cors = require('cors')
const flash = require("connect-flash");
const connectDB = require("./config/db");
const app = express();


app.use(cors())
require("./config/passport");
connectDB();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(methodOverride('_method'))

app.use(
  session({
    secret: "process.env.SESSION_SECRET",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    cookie: { maxAge: 60 * 1000 * 60 * 3 },
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(async (req, res, next) => {
  try {
    res.locals.login = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
  } catch (error) {
    console.log(error);
     res.redirect("/");
  }
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const pfeRouter = require('./routes/pfes')
const etudiantRouter = require('./routes/etudiants')
const enseignantRouter = require('./routes/enseignants')



app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use('/pfes', pfeRouter)
app.use('/etudiants', etudiantRouter)
app.use('/enseignants', enseignantRouter)



/*
app.use(function (req, res, next) {
  next(createError(404));
});*/

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 8000)