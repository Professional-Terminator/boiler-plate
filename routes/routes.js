const express = require("express");
const { welcomeMessage }  = require("../controllers/welcomController")
const router = express.Router();

router.route("/welcome").get(welcomeMessage)

module.exports =  router