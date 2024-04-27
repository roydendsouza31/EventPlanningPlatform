const router = require("express").Router();
const { createHashedPassword } = require("../library/bcrypt");
const { CustomerService } = require("../services");

router.post("/", async (req, res) => {
  try {
    const object = req.body;

    const checkEmail = await CustomerService.findByEmail(object.email);

    if (checkEmail) {
      console.log("Customer already exists");
      res.status(203).json({ msg: "This email address is already registered" });
    } else {
      const hashedPassword = await createHashedPassword(object.password);

      object.password = hashedPassword;

      const customer = await CustomerService.save(object);

      console.log("Customer created");

      res.status(201).json({ msg: "Customer created", customer });
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

module.exports = router;
