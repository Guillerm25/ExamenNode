const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

require('dotenv').config()


const Cliente = require('../models/cliente')

router.get('/', async (req, res) => {
    
    try {

        const arrayClientesDB = await Cliente.find()
        console.log(arrayClientesDB)

        res.render("clientes", {
            arrayClientes: arrayClientesDB
        })
        
    } catch (error) {
        console.log(error)
        
    }

  
})

module.exports = router;