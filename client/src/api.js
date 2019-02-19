import openSocket from "socket.io-client";

export async function testGet() {
  const response = await fetch("/api/test");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export async function testPost(args) {
  const response = await fetch("/api/testpost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ post: args })
  });
  const body = await response.text();
  return body;
}

export async function authenticateUser({ username, password }) {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const body = await response.json();
  return body;
}

const socket = openSocket("http://localhost:5000/");

export function connect(cb) {
  socket.on("chat", message => {
    console.log(message);
    return cb(message);
  });
}

export function chat(user, val){
  socket.emit('chat', user, val);
}

export function updateChat(func){
  socket.on('chat', func)
}
