//Requiring in packages
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

//Set up express servers
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

//Assign PORT value
const PORT = process.env.PORT || 3001;

//Set up serving of static assets from build in client when in production


//Connect to Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bookmark", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo Database");

    //Start the serverr
    app.listen(PORT, () => {
      console.log("Connected on port:" + PORT);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });
