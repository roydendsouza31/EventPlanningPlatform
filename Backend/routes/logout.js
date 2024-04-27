const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.status(200).send("ok");
    console.log("Logged out successfully!");
  } catch (err) {
    console.log("Something went wrong");
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
