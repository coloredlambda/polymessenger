const fastify = require("fastify");
const dotenv = require("dotenv");
const auth = require("fastify-bearer-auth");
const routes = require("./routes");
const swaggerOptions = require("./config/swagger");

dotenv.load();

const keys = new Set([process.env.SECURITY_KEY]);


const server = fastify({
    logger: true
});

// Register Swagger
server.register(require("fastify-swagger"), swaggerOptions);

// Registering authentication scheme
server.register(auth, { keys });

// Setting routes
routes.forEach(route => {
    server.route(route)
});

// Run the server
const start = async () => {
    try{
        await server.listen(process.env.PORT);
        server.swagger();
        console.log("Server starting");
    }catch(err){
        server.log.error(err);
        process.exit(1)
    }
};

(async function() {
    await start();
})();


