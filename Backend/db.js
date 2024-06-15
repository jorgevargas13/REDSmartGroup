const mysql = require('mysql2');
const { db } = require('./configuracion');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
  port: db.port
});

module.exports = pool;