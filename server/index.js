const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// connect to concierge DB
const db = new sqlite3.Database(__dirname + '/database/concierge.db');

// set up app
const app = express();
app.use(cors());
app.use(express.json());

// assign port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// ----------------------------------------------------------------------------
// -------------------------CUSTOMER ENDPOINTS---------------------------------
// ----------------------------------------------------------------------------
// GET all customers
app.get('/api/customers', (req, res) => {
  const sql = 'SELECT * FROM customers';
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// GET customer by id
app.get('/api/customers/:id', (req, res) => {
  const sql = 'SELECT * FROM customers WHERE customerId = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row,
    });
  });
});

// CREATE customer
app.post('/api/customers/', (req, res) => {
  const sql = `INSERT INTO customers 
                (firstName, 
                  lastName, 
                  dateOfBirth, 
                  address1, 
                  address2, 
                  address3, 
                  city, 
                  postcode, 
                  email, 
                  phoneNumber, 
                  nationalInsuranceNo) 
              VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
  const params = [
    req.body.firstName,
    req.body.lastName,
    req.body.dateOfBirth,
    req.body.address1,
    req.body.address2,
    req.body.address3,
    req.body.city,
    req.body.postcode,
    req.body.email,
    req.body.phoneNumber,
    req.body.nationalInsuranceNo,
  ];

  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: params,
      id: this.lastID,
    });
  });
});

// UPDATE customer
app.put('/api/customers/:id', (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    address1: req.body.address1,
    address2: req.body?.address2,
    address3: req.body?.address3,
    city: req.body.city,
    postcode: req.body.postcode,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    nationalInsuranceNo: req.body?.nationalInsuranceNo,
  };
  const sql = `UPDATE customers SET
                firstName = COALESCE(?,firstName),
                lastName = COALESCE(?,lastName),
                dateOfBirth = COALESCE(?,dateOfBirth),
                address1 = COALESCE(?,address1),
                address2 = COALESCE(?,address2),
                address3 = COALESCE(?,address3),
                city = COALESCE(?,city),
                postcode = COALESCE(?,postcode),
                email = COALESCE(?,email),
                phoneNumber = COALESCE(?,phoneNumber),
                nationalInsuranceNo = COALESCE(?,nationalInsuranceNo)
              WHERE customerId = ?`;
  const params = [
    req.body.firstName,
    req.body.lastName,
    req.body.dateOfBirth,
    req.body.address1,
    req.body.address2,
    req.body.address3,
    req.body.city,
    req.body.postcode,
    req.body.email,
    req.body.phoneNumber,
    req.body.nationalInsuranceNo,
    req.params.id,
  ];

  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({
      message: 'success',
      data: data,
      changes: this.changes,
    });
  });
});

// DELETE customer
app.delete('/api/customers/:id', (req, res) => {
  db.run('DELETE FROM customers WHERE customerId = ?', req.params.id, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: 'deleted', changes: this.changes });
  });
});

// SEARCH for customer
app.post('/api/customers/search', (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    postcode: req.body.postcode,
  };

  var sql = 'SELECT * FROM customers WHERE lastName = ? AND dateOfBirth = ?';
  var params = [data.lastName, data.dateOfBirth];

  if (data.firstName && data.postcode) {
    sql = 'SELECT * FROM customers WHERE firstName = ? AND lastName = ? AND dateOfBirth = ? AND postcode = ?';
    params = [data.firstName, data.lastName, data.dateOfBirth, data.postcode];
  } else if (data.firstName) {
    sql = 'SELECT * FROM customers WHERE firstName = ? AND lastName = ? AND dateOfBirth = ?';
    params = [data.firstName, data.lastName, data.dateOfBirth];
  } else if (data.postcode) {
    sql = 'SELECT * FROM customers WHERE lastName = ? AND dateOfBirth = ? AND postcode = ?';
    params = [data.lastName, data.dateOfBirth, data.postcode];
  }

  db.all(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row,
    });
  });
});

// ----------------------------------------------------------------------------
// -------------------------CONSULTANT ENDPOINTS-------------------------------
// ----------------------------------------------------------------------------
// GET all consultants
app.get('/api/consultants', (req, res) => {
  const sql = 'SELECT * FROM consultants';
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// GET consultants by id
app.get('/api/consultants/:id', (req, res) => {
  const sql = 'SELECT * FROM consultants WHERE consultantId = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row,
    });
  });
});

// GET all consultants by department
app.get('/api/consultants/department=:department', (req, res) => {
  const sql = 'SELECT * FROM consultants WHERE department = ?';
  const params = [req.params.department];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// ----------------------------------------------------------------------------
// -------------------------APPOINTMENTS ENDPOINTS-----------------------------
// ----------------------------------------------------------------------------
// GET appointments and consultants by customer ID
app.get('/api/appointments/customer=:customersId', (req, res) => {
  const sql =
    'SELECT * FROM "appointments" JOIN consultants ON appointments.consultantId = consultants.consultantId WHERE customerId = ?';
  const params = [req.params.customersId];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

// GET appointment by id
app.get('/api/appointments/:id', (req, res) => {
  const sql = 'SELECT * FROM appointments WHERE appointmentId = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row,
    });
  });
});
