const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 3001;
const app = express();

const db = new sqlite3.Database(__dirname + '/database/concierge.db');
// db.each('SELECT * FROM customers;', function (err, row) {
//   console.log(row);
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/api/customers', (req, res) => {
  db.all('SELECT * FROM customers;', (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});
