const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mnbmnbmnb", {
    useNewUrlParser: true,
  })
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("error in db"));
