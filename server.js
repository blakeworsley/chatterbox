const express = require("express")();
const port = process.env.PORT || 5000;
const http = require("http").Server(express);
const io = require("socket.io")(http);

const chatMessages = [];

io.on("connection", socket => {
  console.log("a user has joined");

  io.emit("this", { blake: "coooool" });

  socket.broadcast.emit("has joined");

  socket.on("chat", msg => {
    chatMessages.push(msg.author.firstName + ": " + msg.text);
    io.emit("chat", msg);
    console.log(chatMessages);
  });

  socket.on("fetchMessages", msg => {
    io.emit("");
  });

  socket.on("disconnect", () => {
    console.log("a user has left");
  });
});

io.listen(port, () => console.log(`Listening on port ${port}`));
