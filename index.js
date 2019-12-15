const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(bodyParser.json());

    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
