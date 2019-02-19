import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000/");

export function connect(cb) {
  socket.on("chat", message => {
    console.log(message);
    return cb(message);
  });
}

export function chat(user, val) {
  socket.emit("chat", user, val);
}

export function updateChat(func) {
  socket.on("chat", func);
}
