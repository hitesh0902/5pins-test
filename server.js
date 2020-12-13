const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Load config
dotenv.config({ path: "./config/config.env" });

// Passport config
require("./config/passport")(passport);

// Constants
const app = express();
const port = process.env.PORT || 5000;

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors()); // api testing

// Sessions
app.use(
  session({
    name: "qid",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      httpOnly: true, // need to check
      sameSite: "lax", // need to check more
      secure: false, // cookie only works in https = __prod__ || Producton
    },
    secret: process.env.SESSION_SECRET, // session secret
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongodb
const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log("Server runnning on port " + port))
  )
  .catch((err) => console.log(err));

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/api/meetings", require("./routes/meeting"));
