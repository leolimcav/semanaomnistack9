const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-tiqcl.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "destination"))
);
app.use(routes);

app.listen(3333, () => console.log("Running on 3333"));
