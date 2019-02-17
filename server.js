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

app.listen(port, () => console.log(`Listening on port ${port}`));
