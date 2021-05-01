//Requiring in packages
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

//Set up express server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//Assign PORT value
const PORT = process.env.PORT || 3001;

//Set up serving of static assets from build in client when in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect to Mongo DB
mongoose
  .connect(
    "mongodb+srv://omayma:Chanel123@cluster0.ummds.mongodb.net/bookmark?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongo Database");
    //Start the server
    app.listen(PORT, () => {
      console.log("Connected on port:" + PORT);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });
