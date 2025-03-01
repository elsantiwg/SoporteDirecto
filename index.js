const port = 3000;
const application = require("./application");


application.listen(port, () =>{
    console.log("Server running at http://localhost" + port);
})