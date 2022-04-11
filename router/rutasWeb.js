const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { titulo: "App gestion viajes" });
  });



module.exports = router;