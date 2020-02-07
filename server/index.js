const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.static(path.join(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
