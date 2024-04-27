const router = require("express").Router();
const { CustomerService } = require("../services");
const { matchedPassword } = require("../library/bcrypt");

router.post("/", async (req, res) => {
  try {
    const object = req.body;

    const customer = await CustomerService.findByEmail(object.email);

    if (customer) {
      const { id, name, surname, email, image } = customer;

      const matched = await matchedPassword(object.password, customer.password);

      if (matched) {
        req.session.authenticated = true;
        req.session.customer = {
          id,
          name,
          surname,
          email,
          image,
        };

        console.log("Customer logged in successfully!");
        res.status(200).send(customer);
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
