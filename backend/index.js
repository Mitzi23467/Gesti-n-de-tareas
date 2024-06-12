const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurar middleware
app.use(bodyParser.json());
app.use(cors());

// Configurar conexión a la base de datos
const db = mysql.createConnection({
  host: '10.10.11.122',
  user: 'admin',
  password: 'Anita-12345',  // Cambia esto por tu contraseña
  database: 'Anita'       // Cambia esto por tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Validar nombres de tablas
const isValidTableName = (tableName) => {
  // Sólo permitir letras, números y guiones bajos
  const validTableNamePattern = /^[a-zA-Z0-9_]+$/;
  return validTableNamePattern.test(tableName);
};

// Ruta para obtener todos los registros de una tabla específica
app.get('/api/:table', (req, res) => {
  const tableName = req.params.table;
  if (!isValidTableName(tableName)) {
    return res.status(400).json({ error: 'Nombre de tabla inválido' });
  }

  const sql = `SELECT * FROM ??`;
  db.query(sql, [tableName], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
