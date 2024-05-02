// Connect to MongoDB
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/creationsgoa";

function main() {
  try {
    mongoose.connect(connectionString);
    console.log("Connected to mongodb successfully!");
  } catch (err) {
    console.log(err);
  }
}

main();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const store = new session.MemoryStore();

const {
  customerSignupRouter,
  sellerSignupRouter,
  customerLoginRouter,
  sellerLoginRouter,
  customerProfileRouter,
  apiRouter,
} = require("./routes");

const app = express();
const port = 3001;

app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Allow requests from both frontend origins
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "9deacb65f$c4a689c3b$937e1ab$f0a1",
    cookie: {
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days in milliseconds
      secure: false,
    },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.use("/customersignup", customerSignupRouter);
app.use("/customerlogin", customerLoginRouter);
app.use("/profile", customerProfileRouter);
app.use("/sellersignup", sellerSignupRouter);
app.use("/sellerlogin", sellerLoginRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
