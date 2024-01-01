const express = require("express");

const app = express();

const port = 1111;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/linkedin", (req, res) => {
  res.send("https://linkedin.com/in/taraksh01");
});

app.get("/github", (req, res) => {
  res.send("https://github.com/taraksh01");
});

app.get("/twitter", (req, res) => {
  res.send("https://twitter.com/taraksh01");
});

app.get("/portfolio", (req, res) => {
  res.send("https://taraksh01.vercel.app");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
