const router = require("express").Router();
const { createHashedPassword } = require("../library/bcrypt");
const { SellerService } = require("../services");

router.post("/", async (req, res) => {
  try {
    const object = req.body;
    console.log("Seller: ", object);
    const checkEmail = await SellerService.findByEmail(object.email);

    if (checkEmail) {
      console.log("Seller already exists");
      res.status(203).json({ msg: "This email address is already registered" });
    } else {
      const hashedPassword = await createHashedPassword(object.password);

      object.password = hashedPassword;

      const seller = await SellerService.save(object);

      console.log("Seller created,login now");

      res.status(201).json({ msg: "Seller created ", seller });
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

module.exports = router;
