const express = require("express");
const colors = require("colors");
// Create an express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT}`.bgCyan.white
  );
});
