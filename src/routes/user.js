const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/user");
const ajv = require("../plugins/ajv");
const { createUserSchema } = require("../validations/user");
/*
module.exports = [
  {
    method: "GET",
    url: "/api/users",
    handler: getUsers,
  },
  {
    method: "POST",
    url: "/api/users",
    handler: createUser,
  },
];
*/

const userRoute = (fastify, opts, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get("/", getUsers);
  fastify.post("/", {
    schema: createUserSchema
  }, createUser);
  fastify.patch("/", updateUser);
  fastify.delete("/", deleteUser);

  done();
};

module.exports = { userRoute };
