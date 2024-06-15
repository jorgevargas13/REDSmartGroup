const db = require('../db');

const obtenerRecords = async (req, res, next) => {
    try {
        const connection = await db.promise().getConnection();
        const [rows, fields] = await connection.execute(`
            SELECT nombre AS Estudiante, puntajeTotal As Puntaje,tiempoTotal AS Tiempo, @posicion := @posicion + 1 AS posición FROM (SELECT * FROM Record ORDER BY puntajeTotal DESC, tiempoTotal ASC) AS ranked, 
            (SELECT @posicion := 0) AS init ORDER BY puntajeTotal DESC`
        );
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los Records', error);
        next(`Se presentó el siguiente error: ${error.message}`);
    }
}

const insertarRecord = async (req, res, next) => {
    try {
        const {nombre, puntajeTotal, tiempoTotal, identificacion} = req.body;
        const connection = await db.promise().getConnection();
        const [rows, fields] = await connection.execute(`
            INSERT INTO Record (identificacion, nombre, puntajeTotal, tiempoTotal) VALUES
            (?, ?, ?, SEC_TO_TIME(?));
        `, [identificacion, nombre, puntajeTotal, tiempoTotal]);
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los Records', error);
        next(`Se presentó el siguiente error: ${error.message}`);
    }
}

module.exports = {
    obtenerRecords, insertarRecord
}