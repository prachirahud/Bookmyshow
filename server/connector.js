const mongodb = require("mongodb");
const dotenv = require("dotenv").config();
let mongoose = require("mongoose");
const { bookMovieSchema } = require("./schema");

const mongoURI

= process.env.MONGODBLIVE ;

mongoose
  .connect(mongoURI,

    { useNewUrlParser: true,
      useCreateIndex:true,
      useUnifiedTopology: true,
      useFindAndModify:false
     })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.error("error while connection", err);
  });

let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);

exports.connection = collection_connection;
