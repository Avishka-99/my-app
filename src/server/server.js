const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoUrl ="mongodb+srv://root:1234@cluster0.lvjs7jg.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  