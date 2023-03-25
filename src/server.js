import express from 'express';
//const exphbs = require('express-handlebars');
const controler = require('./Routes/index.routes')
import path, { dirname } from 'path'
import { create } from 'express-handlebars';
import morgan from 'morgan';

const app = express();


// Definir la ruta para el home
app.set('views', path.join(__dirname, 'views'))

//configuracion del motor hbs
var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
})

//aqui esta la configuracion al motor handlebars
app.engine(".hbs", hbs.engine);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Seteamos el motor de handlebars
app.set("view engine", ".hbs");

app.use(controler);

// Iniciar el servidor HTTP en el puerto 4000
app.listen(4000, () => {    
    console.log("Servidor HTTP escuchando en el puerto 4000");
});

