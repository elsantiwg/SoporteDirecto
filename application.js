const express = require("express");
const application = express()

application.use(express.json());
application.use(express.urlencoded({extended:true}));

module.exports = application;

const problems_routes = require("./routes/problems")

application.use("/api", problems_routes);