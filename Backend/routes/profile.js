const router = require("express").Router();
const { CustomerService } = require("../services");

function ensureAuthentication(req, res, next) {
  if (req.session.authenticated) {
    console.log("Authenticated successfully!");
    return next();
  } else {
    res.status(203).send("You're not authorized to view this page");
  }
}

router.get("/", ensureAuthentication, async (req, res) => {
  try {
    const customer = req.session.customer;
    if (customer) {
      res.status(200).send(customer);
    } else {
      res.status(203).send("Customer not found");
    }
  } catch (err) {
    res.status(203).send("Customer not found");
  }
});

router.post("/image", ensureAuthentication, async (req, res) => {
  const customerId = req.session.customer.id;
  const customer = await CustomerService.find(customerId);

  const imageUrl = req.body.image;

  customer.image = imageUrl;

  await CustomerService.update(customerId, customer);

  req.session.customer.image = imageUrl;
  console.log("Image updated successfully!");
  res.send(customer);
});

router.post("/logout", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.status(200).send("ok");
    console.log("Logged out successfully!");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
