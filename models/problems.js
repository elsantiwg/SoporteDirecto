const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProblemSchema = Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    user:{
        type: String,
        require: true
    },
    severity:{
        type: String,
        require: true
    },
    completed:{
        type: String,
        require: true,
        default: false
    },
    create_at:{
        type: String,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Problems", ProblemSchema);