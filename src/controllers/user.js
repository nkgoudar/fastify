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
    reply.status(201).send(user);
  } catch (err) {
    console.log(err);
    reply.status(500).send("Internal server error");
  }
};

const updateUser = async (req, reply) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if(!email) return reply.status(400).send("Email not provided");
    const user = await User.findOne({where: {email, password}});
    if(!user) return reply.status(400).send("Invalid credentials");
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    await user.save();
    reply.send({message: "Updated", user});
  } catch (err) {
    console.log(err);
    reply.status(500).send("Internal server error");
  }
}

const deleteUser = async (req, reply) => {
  try {
    const { email, password } = req.body;
    if(!email) return reply.status(400).send("Email not provided");
    const deletedUser = await User.destroy({where: {email, password}});
    if(!deletedUser) return reply.status(400).send("Invalid credentials");
    reply.send("User deleted successfully");
  } catch (err) {
    console.log(err);
    reply.status(500).send("Internal server error");
  }
}

module.exports = { getUsers, createUser, updateUser, deleteUser };
