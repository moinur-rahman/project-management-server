const express = require("express");
const cors = require("cors");
require("./db/mongoose");

const app = express();
const port = 5000;

const projectRouter = require("./routers/project");
const developerRouter = require("./routers/developer");
const estimationRouter = require("./routers/estimation");

app.use(express.json());
app.use(cors());
app.use(projectRouter);
app.use(developerRouter);
app.use(estimationRouter);

app.listen(port, () => {
  console.log("Server is up on port", port);
});
