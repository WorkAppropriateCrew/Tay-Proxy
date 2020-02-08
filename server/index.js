const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
