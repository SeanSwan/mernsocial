const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb:/localhost/mernsocial" , {
  useNewUrlParser: true
  //useMongoClient: true // recived error saying this is not used in mongo 5x
});