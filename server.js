const express = require("express")();
const port = process.env.PORT || 5000;
const http = require("http").Server(express);
const io = require("socket.io")(http);

const channels = [{ name: "chat", messages: [] }, { name: "new", messages: [] }];

io.on("connection", socket => {
  console.log("user connected");
  socket.broadcast.emit("has joined");

  io.emit("connected", channels);

  // channels.forEach(channel => {
  //   socket.on(channel.name, (msg) => {
  //     console.log(`(Channel ${channel.name}) ${msg.author.firstName}: ${msg.text}`);
  //     channels[0].messages.push(msg);
  //     io.emit("chat", msg);
  //   })
  // })

  socket.on("chat", msg => {
    console.log(`(Channel chat) ${msg.author.firstName}: ${msg.text}`);
    channels[0].messages.push(msg);
    io.emit("chat", msg);
  });

  socket.on("new", msg => {
    console.log(`(Channel new) ${msg.author.firstName}: ${msg.text}`);
    channels[1].messages.push(msg);
    io.emit("new", msg);
  });

  socket.on("disconnect", (user) => {
    console.log("a user has left");
  });
});

io.listen(port, () => console.log(`Listening on port ${port}`));
