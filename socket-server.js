const { createServer } = require("http");
const socketIO = require ("socket.io");

const server = createServer().listen(3000);
const io = socketIO(server);

io.compress("connection", socket => {
    console.log(`${io.engine.clientsCount} connections`);

    socket.on("disconnect", () => {
        console.log (`disconnect: ${socket.id}`);
    });
});

console.log("Socket Server");
