const problems = require("../models/problems");

function holaMundo(require,response){
    console.log("hola mundo");
}

function createProblems(req,res){
    const problems = Problems();
    const params = req.body;

    problems.title =params.title;
    problems.description = params.description;
    problems.user = params.user;
    problems.severity = params.severity;

    console.log(problems.title);
}

module.exports ={
    holaMundo,
    createProblems
}