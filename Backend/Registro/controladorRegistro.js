const db = require('../db');

const insertarRegistro = async (req, res, next) => {
    try {
        const { identificacion, nombre, puntaje, terminado, rutaTema1, rutaTema2, rutaTema3 } = req.body;
        const connection = await db.promise().getConnection();

        // Verificar si el usuario ya existe
        const [existingUser] = await connection.execute(`
            SELECT puntaje, terminado, rutaTema1, rutaTema2, rutaTema3 FROM progreso WHERE iden = ?;
        `, [identificacion]);

        if (existingUser.length > 0) {
            connection.release();
            res.json({registrado: existingUser[0]});
        } else {
            const [rows] = await connection.execute(`
                INSERT INTO progreso (iden, nombre, puntaje, terminado, rutaTema1, rutaTema2, rutaTema3) VALUES (?, ?, ?, ?, ?, ?, ?);
            `, [identificacion, nombre, JSON.stringify(puntaje),
                JSON.stringify(terminado),
                JSON.stringify(rutaTema1),
                JSON.stringify(rutaTema2),
                JSON.stringify(rutaTema3)
            ]);
            connection.release();
            res.json(rows);
        }
    } catch (error) {
        console.error('Error al obtener los Records', error);
        next(`Se presentó el siguiente error: ${error.message}`);
    }
}

const actualzarRegistro = async (req, res, next) => {
    try {
        const {identificacion, puntaje, terminado, rutaTema1, rutaTema2, rutaTema3} = req.body;
        const connection = await db.promise().getConnection();
        const [rows, fields] = await connection.execute(`
            UPDATE progreso 
            SET puntaje=?,
            terminado=?, 
            rutaTema1=?, 
            rutaTema2=?, 
            rutaTema3=?
            WHERE iden = ?;
        `, [
            JSON.stringify(puntaje),
            JSON.stringify(terminado),
            JSON.stringify(rutaTema1),
            JSON.stringify(rutaTema2),
            JSON.stringify(rutaTema3),
            identificacion
        ]);
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los Records', error);
        next(`Se presentó el siguiente error: ${error.message}`);
    }
}

const eliminarRegistro = async (req, res, next) => {
    try {
        const { iden } = req.params;
        const connection = await db.promise().getConnection();
        const [result] = await connection.execute(`
            DELETE FROM progreso WHERE iden = ?;
        `, [iden]);
        connection.release();
        if (result.affectedRows > 0) {
            res.json({ message: "Registro eliminado exitosamente" });
        } else {
            res.json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        console.error('Error al eliminar el registro', error);
        next(`Se presentó el siguiente error: ${error.message}`);
    }
};

module.exports = {
    insertarRegistro, actualzarRegistro, eliminarRegistro
}