const { getUsers, createUser } = require("../controllers/user");

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

const userRoute = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get("/", getUsers);
  fastify.post("/", createUser);

  done();
};

module.exports = { userRoute };
