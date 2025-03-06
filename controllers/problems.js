const problems = require("../models/problems");

function holaMundo(require,response){
    console.log("hola mundo");
}

function createProblems(req,res){
    console.log("Creando problema");
}

module.exports ={
    holaMundo,
    createProblems
}