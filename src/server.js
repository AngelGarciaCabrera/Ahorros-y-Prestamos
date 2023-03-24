const express = require("express");
const path = require("path");

const app = express();

// Configurar la ruta de la página de inicio
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'main.html'));
});

// Iniciar el servidor HTTP en el puerto 3000
app.listen(4000, () => {
    console.log("Servidor HTTP escuchando en el puerto 4000");
});
