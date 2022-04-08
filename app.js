const express = require("express");
const app = express();

const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });

  //Pagina de error
  app.use((req, res, next) => {
    res.status(404).render("404");
  });
  
  app.listen(port, () => {
    console.log('servidor escuchando', port)
  });