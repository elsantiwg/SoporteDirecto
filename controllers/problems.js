const problems = require("../models/problems");

function holaMundo(require,response){
    console.log("hola mundo");
}

async function createProblems(req,res){
    const problems = Problems();
    const params = req.body;

    problems.title =params.title;
    problems.description = params.description;
    problems.user = params.user;
    problems.severity = params.severity;

    try {
        const problemsStore = await problems.save();

        if (!problemsStore){
            res.status(400).send({msg:"no se ha enviado el problema"});
        }
        else{
            res.status(200).send({problems: problemsStore});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports ={
    holaMundo,
    createProblems
}