const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, async (req, res) => {
  const profile = await knex("user").where({ "user.id": req.user_id }).first();
  console.log(req.user_id);
  delete profile.password;
  res.send(profile);
});
module.exports = router;

// router.get("/", authenticate, async (req, res) => {
//   const profile = await knex("user").where({ "user.id": req.user_id }).first();
//   console.log(req.user_id);
//   delete profile.password;
//   res.send(profile);
// });