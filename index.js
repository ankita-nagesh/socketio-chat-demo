const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("send message", (data) => {
    io.emit("send message", data);
  });
});

server.listen(port, () => {
  console.log(`Server is listening at the port : ${port}`);
});
