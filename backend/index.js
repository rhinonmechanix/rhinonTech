const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const auth = require("./middlewares/auth.js");
const errors = require("./middlewares/errors.js");
const unless = require("express-unless");
const cors = require('cors');
const morgan = require('morgan');

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database can't be connected: " + error);
    }
  );

app.use(cors({
  origin: "*"
}))

auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
      { url: "/users/user-profile", methods: ["POST"] },
      { url: "/users/otpLogin", methods: ["POST"] },
      { url: "/users/verifyOTP", methods: ["POST"] },
      { url: "/users/laptop", methods: ["POST"] },
      { url: "/users/laptop", methods: ["GET"] },
      { url: "/users/laptops/:id", methods: ["DELETE"] },
    ],
  })
);

app.use(express.json());
app.use(morgan('dev'));

// initialize routes
app.use("/users", require("./routes/users.routes"));

// listen for requests
app.listen(process.env.port || 3000, function () {
  console.log("Ready to Go!");
});
