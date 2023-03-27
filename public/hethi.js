const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
var privateKey = fs.readFileSync(
  "/Users/yogi.valecha/Desktop/jwtRS256.key",
  "utf8"
);
const secret = process.env.KEY;
const nsecret = process.env.PUB_KEY;
// console.log(secret + "\n\n\n\n" + nsecret);
const obj = {
  sub: "aranfadf",
  iat: Math.floor(Date.now() / 1000),
  email: "yogi@cashfreenow.com",
  nonce: "ENqje4Ob0iXUm0ST",
  given_name: "yogii",
  family_name: "valecha",
};
const token = jwt.sign(obj, privateKey, { algorithm: "RS256" });
console.log(token);
