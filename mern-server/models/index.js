const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb:/localhost/mernsocial" , {
  KeepAlive: true,
  useMongoClient: true
});