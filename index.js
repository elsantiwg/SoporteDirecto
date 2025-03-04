const port = 3000;
const application = require("./application");
const mongoose = require("mongoose");
const urlMongoDb = "mongodb+srv://admin:123@soportedirecto.fibfx.mongodb.net/apidb";

async function startServer() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(urlMongoDb);
    console.log("La conexión a la base de datos es correcta");

    // Iniciar el servidor
    application.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}

// Llamar a la función para iniciar el servidor
startServer();