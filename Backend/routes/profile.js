const router = require("express").Router();
const { UserService } = require("../services");

function ensureAuthentication(req, res, next) {
  if (req.session.authenticated) {
    return next();
  } else {
    res.status(203).send("You're not authorized to view this page");
  }
}

router.get("/", ensureAuthentication, async (req, res) => {
  try {
    const user = req.session.user;
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(203).send("User not found at this id");
    }
  } catch (err) {
    res.status(203).send("User not found at this id");
  }
});

router.post("/image", async (req, res) => {
  const userId = req.session.user.id;
  const user = await UserService.find(userId);

  const imageUrl = req.body.image;

  user.image = imageUrl;

  await UserService.update(userId, user);

  req.session.user.image = imageUrl;

  res.send(user);
});

router.post("/logout", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.status(200).send("ok");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
