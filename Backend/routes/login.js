const router = require("express").Router();
const { UserService } = require("../services");
const { matchedPassword } = require("../library/bcrypt");

router.get("/", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(203);
  }
});

router.post("/", async (req, res) => {
  try {
    const object = req.body.user;

    const user = await UserService.findByEmail(object.email);

    if (user) {
      const { id, name, surname, email, image } = user;

      const matched = await matchedPassword(object.password, user.password);
      if (matched) {
        req.session.authenticated = true;
        req.session.user = {
          id,
          name,
          surname,
          email,
          image,
        };

        res.status(200).send(user);
      } else {
        res.status(203).send("Incorrect password");
      }
    } else {
      res.status(203).send("User not found. Please sign up.");
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

module.exports = router;
