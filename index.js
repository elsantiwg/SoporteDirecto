const port = 3000;
const application = require("./application");
const mongoose = require ("mongoose");
const urlMongoDb = "mongodb+srv://admin:123@soportedirecto.fibfx.mongodb.net/apidb"

application.listen(port, () =>{
    console.log("Server running at http://localhost" + port);
})