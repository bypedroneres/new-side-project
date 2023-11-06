const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000; 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Pedro',
  password: '123456',
  database: 'nome_do_banco_de_dados',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida');
  }
});



