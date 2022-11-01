const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

app.get("/new-project", async (req, res) => {
       
});

app.listen(port, () => {
  console.log("Server is up on port", port);
});
