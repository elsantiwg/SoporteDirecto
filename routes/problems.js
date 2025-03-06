const express = require("express")
const ProblemsController = require ("../controllers/problems");

const api = express.Router();

api.get("/holaMundo",ProblemsController.holaMundo);
api.post("/createProblems",ProblemsController.createProblems);

module.exports = application;

const problems_routes = require("./routes/incident")

application.use("/api", problems_routes);