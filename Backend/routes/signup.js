const router = require("express").Router();
const { createHashedPassword } = require("../library/bcrypt");
const { UserService } = require("../services");

router.get("/", (req, res) => {
  res.send("signup page");
});

router.post("/", async (req, res) => {
  try {
    // const object = req.body.user;
    const object = req.body;
    console.log(object);

    const checkEmail = await UserService.findByEmail(object.email);

    if (checkEmail) {
      res.status(203).json({ msg: "This email address is already registered" });
    } else {
      const hashedPassword = await createHashedPassword(object.password);

      object.password = hashedPassword;

      const user = await UserService.save(object);

      console.log("User created");
      console.log(user);

      res.status(201).json({ msg: "User created", user });
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

module.exports = router;
