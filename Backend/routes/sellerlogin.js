const router = require("express").Router();
const { SellerService } = require("../services");
const { matchedPassword } = require("../library/bcrypt");

router.post("/", async (req, res) => {
  try {
    const object = req.body;

    const seller = await SellerService.findByEmail(object.email);

    if (seller) {
      const { id, name, surname, email, image } = seller;

      const matched = await matchedPassword(object.password, seller.password);

      if (matched) {
        req.session.authenticated = true;
        req.session.seller = {
          id,
          name,
          surname,
          email,
          image,
        };

        console.log(name + " Seller logged in successfully!");
        res.status(200).send(seller);
      } else {
        res.status(203).send("Incorrect password");
      }
    } else {
      res.status(203).send("Customer not found. Please sign up.");
    }
  } catch (err) {
    res.send({ msg: err });
  }
});

module.exports = router;
