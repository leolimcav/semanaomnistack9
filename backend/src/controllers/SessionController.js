const User = require("../models/Users");
module.exports = {
  async index(req, res) {},

  async show(req, res) {},

  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    res.json(user);
  },

  async update(req, res) {},

  async destroy(req, res) {}
};
