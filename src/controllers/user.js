const User = require("../models/user");

const getUsers = async (req, reply) => {
  try {
    const users = await User.findAll();
    reply.send(users);
  } catch (err) {
    console.log(err);
    reply.status(500).send("Internal server error");
  }
};

const createUser = async (req, reply) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = User.build({ firstName, lastName, email, password });
    await await user.save();
    reply.send(user);
  } catch (err) {
    console.log(err);
    reply.status(500).send("Internal server error");
  }
};

module.exports = { getUsers, createUser };
