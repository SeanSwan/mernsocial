const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin - function() {}

exports.signup = async function (req, res, next) {
  try {
    let user = await db.user.create(req.body);
    let {id, username, profileImageUrl } = user
    let token = jwt.sign({
      id,
      username,
      profileImageUrl
    },
    process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
    // create a user
    // create a token
    // process.env.SECRET_KEY
  } catch(err) {
    // If validation fails!
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken"
    }
  
  }
  // see what kind of error
  // if it is a certain error
  // respond with username/email already taken
  // otherwise just send back a generic 400


};