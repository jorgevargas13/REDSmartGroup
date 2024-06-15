const express = require('express');
const {
    insertarRegistro, actualzarRegistro, eliminarRegistro
} = require('./controladorRegistro');

const router = express.Router();

router.delete('/eliminarRegistro/:iden', eliminarRegistro);

router.post('/insertarRegistro/', insertarRegistro);
router.post('/actualzarRegistro/', actualzarRegistro);

module.exports = router;