const express = require('express');
const {
    obtenerRecords, insertarRecord
} = require('./controladorRecord');

const router = express.Router();

router.get('/records/', obtenerRecords);

router.post('/insertarRecord/', insertarRecord);

module.exports = router;