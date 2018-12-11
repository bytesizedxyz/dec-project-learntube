const jwt = require("jsonwebtoken");
const secret = process.env.jwtSecret;

module.exports = (req, res, next) => {
  if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, Buffer.from(secret, 'base64'), {algorithms:["HS256"]}, (err, decoded) => {
      if(err && !decoded){
        res.status(401).send({
          err: "Invalid token"
        })
      } else if (err && decoded){
        res.status(401).send({
          err:"token is decoded and theres an error"
        })
      } else if (!err && decoded){
        req.user = decoded;
        next();
      }
    })
  } else {
    res.status(422).send({
      "err":"no bearer token"
    })
  }
}