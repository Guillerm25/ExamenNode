const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


require('dotenv').config()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`APP ESCUCHANDO EN ${ PORT }`);
});

//BBDD

const mongoose = require('mongoose');



const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.7on3s.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Base de datos conectada')) 
  .catch(e => console.log('error de conexión', e))

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/rutasWeb'));
app.use('/clientes', require('./router/clientes'));

  //Pagina de error
  app.use((req, res, next) => {
    res.status(404).render("404");
  });
  