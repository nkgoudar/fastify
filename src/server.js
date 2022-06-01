const { build } = require("./app.js");

const app = build({ logger: true });

/*
const fastify = require("fastify")({
  logger: true,
});

const { executeQuery } = require("./db");

const userRoutes = require("./routes/user");

function v3Handler(req, reply) {
  reply.send("V3 REPLY");
}

const routes = [
  {
    method: "GET",
    url: "/api/v2/ok",
    handler: (req, reply) => {
      reply.send("V2 REPLY");
    },
  },
  {
    method: "GET",
    url: "/api/v3/ok",
    handler: v3Handler,
  },
  ...userRoutes,
];

fastify.route({
  method: "GET",
  url: "/api/v1/ok",
  handler: (req, reply) => {
    reply.send("V1 REPLY");
  },
});

routes.forEach((route) => {
  fastify.route(route);
});

fastify.get("/", async (req, reply) => {
  try {
    let data = await executeQuery("select * from customer", []);
    reply.status(200).send(data);
  } catch (err) {
    reply.status(500).send(err);
  }
});
*/

const startServer = async () => {
  try {
    await app.listen(3000, (err, port) => {
      if (err) return err;
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
