const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser')
const router = express.Router();



require('dotenv').config()



const Cliente = require('../models/cliente');
const { append } = require('express/lib/response');

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

//Rutas para la navegación

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.get('/viajes', (req, res) => {
    res.render('viajes')
})

router.get('/seguros', (req, res) => {
    res.render('seguros')
})


router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        await Cliente.create(body)
        res.redirect('/clientes')
    } catch (error) {
        console.log('error', error)
    }
})





router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const clienteDB = await Cliente.findOne({ _id: id })
        console.log(clienteDB)
        res.render('detalle', {
            cliente: clienteDB,
            error: false
        })
    } catch (error) {
        console.log('error al editar', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el documento...'
        })
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde back-end', id)
    try {

        const clientesDB = await Cliente.findByIdAndDelete({ _id: id });
        console.log(clientesDB)

        if (!clientesDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

//editar cliente

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    console.log(id)
    console.log('body', body)

    try {
        const clienteDB = await Cliente.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(clienteDB)
        res.json({
            estado: true,
            mensaje: 'cliente editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'cliente no editado'
        })
    }
})

module.exports = router;