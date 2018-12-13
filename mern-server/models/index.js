const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb:/localhost:8081/mern-social" , {
  useNewUrlParser: true
  //useMongoClient: true // recived error saying this is not used in mongo 5x
});

module.exports.User = require("./user");
module.exports.Messages = require("./message");