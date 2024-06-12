const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Base de datos
const db = mysql.createConnection({
  host: '10.10.11.122',
  user: 'admin',
  password: 'Anita-12345',
  database: 'Anita'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas
app.post('/api/login', (req, res) => {
  const { correoInstitucional, contrasena } = req.body;
  const sql = `SELECT * FROM Alumno WHERE correo_institucional = ? AND contra = ?`;
  db.query(sql, [correoInstitucional, contrasena], (err, result) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      res.status(500).json({ success: false, message: 'Error en el servidor' });
      return;
    }
    if (result.length > 0) {
      res.json({ success: true, message: 'Login exitoso' });
    } else {
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  });
});

app.get('/api/alumnos', (req, res) => {
  const sql = 'SELECT * FROM Alumno';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener alumnos:', err);
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

app.get('/api/tareas', (req, res) => {
  let sql = 'SELECT * FROM Tareas';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get('/api/proyectos', (req, res) => {
  const sql = 'SELECT * FROM Proyectos';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
