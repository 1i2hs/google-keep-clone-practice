const path = require("path");
const express = require("express");
const app = express();
const PORT = 3100;

app.use("/resources", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages") + "/index.html");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
