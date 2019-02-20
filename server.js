const express = require("express")();
const port = process.env.PORT || 5000;
const http = require("http").Server(express);
const io = require("socket.io")(http);

const channels = [];
const chatMessages = [];

io.on("connection", socket => {
  socket.broadcast.emit("has joined");

  socket.on("chat", msg => {
    chatMessages.push(msg);
    io.emit("chat", msg);
    console.log(chatMessages, '<<<< Chat');
  });

  socket.on("new", msg => {
    io.emit("new", msg);
  });

  socket.on("disconnect", () => {
    console.log("a user has left");
  });
});

io.listen(port, () => console.log(`Listening on port ${port}`));
