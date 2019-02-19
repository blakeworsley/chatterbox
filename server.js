const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const http = require("http").Server(app);
const io = require("socket.io")(http);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.post("/api/auth", (req, res) => {
//   if (req.body.username == "blakeworsley" && req.body.password == "12345") {
//     res.send({
//       success: true,
//       message: `Welcome ${req.body.username}`,
//       result: {
//         firstName: "Blake",
//         lastName: "Worsley",
//         username: "blakeworsley@gmail.com",
//         id: "b3k89o32bgn8s"
//       }
//     });
//   } else {
//     res.send({ success: false, message: `Incorrect Login Information` });
//   }
// });

const messages = [];

io.on("connection", function(socket) {
  console.log("a user connected");

  io.emit("this", { will: "be received by everyone" });

  socket.on("chat", function(msg) {
    messages.push(msg);
    const message = `${msg.author.username}: ${msg.text}`;
    console.log(message, messages);
    io.emit('chat', msg);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

io.listen(port, () => console.log(`Listening on port ${port}`));
