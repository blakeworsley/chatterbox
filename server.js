const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  res.send({ test: "testing 123" });
});

app.post("/api/testpost", (req, res) => {
  res.send(`You sent: ${req.body.post}`);
});

app.post("/api/auth", (req, res) => {
  if (req.body.username == "blakeworsley" && req.body.password == "12345") {
    res.send({
      success: true,
      message: `Welcome ${req.body.username}`,
      result: {
        name: "Blake Worsley",
        username: "blakeworsley@gmail.com",
        id: "b3k89o32bgn8s"
      }
    });
  } else {
    res.send({ success: false, message: `Incorrect Login Information` });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
