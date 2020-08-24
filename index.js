const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
