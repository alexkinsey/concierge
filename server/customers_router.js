const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/database/concierge.db');

const customersRouter =  () => {
  const router = express();

  // GET all customers
  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM customers';
    const params = [];
    db.all(sql, params, (err, rows) => {
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

  // GET customer by id
  router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM customers WHERE customer_id = ?';
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });

  // CREATE customer
  router.post('/', (req, res) => {
    const errors = [];
    if (!req.body.first_name) {
      errors.push('No first name specified');
    }
    if (!req.body.last_name) {
      errors.push('No first name specified');
    }
    if (!req.body.date_of_birth) {
      errors.push('No data of birth specified');
    }
    if (errors.length) {
      res.status(400).json({ error: errors.join(',') });
      return;
    }

    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      address1: req.body.address1,
      address2: req.body?.address2,
      address3: req.body?.address3,
      city: req.body.city,
      postcode: req.body.postcode,
      email: req.body.email,
      phone_number: req.body.phone_number,
      national_insurance_number: req.body?.national_insurance_number
    };
    const sql = `INSERT INTO customers 
                  (first_name, 
                    last_name, 
                    date_of_birth, 
                    address1, 
                    address2, 
                    address3, 
                    city, 
                    postcode, 
                    email, 
                    phone_number, 
                    national_insurance_number) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
    const params = [
      data.first_name,
      data.last_name,
      data.date_of_birth,
      data.address1,
      data.address2,
      data.address3,
      data.city,
      data.postcode,
      data.email,
      data.phone_number,
      data.national_insurance_number
    ];

    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: data,
        id: this.lastID
      });
    });
  });

  // UPDATE customer
  router.put('/:id', (req, res) => {
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      address1: req.body.address1,
      address2: req.body?.address2,
      address3: req.body?.address3,
      city: req.body.city,
      postcode: req.body.postcode,
      email: req.body.email,
      phone_number: req.body.phone_number,
      national_insurance_number: req.body?.national_insurance_number
    };
    const sql = `UPDATE customers SET
                  first_name = COALESCE(?,first_name),
                  last_name = COALESCE(?,last_name),
                  date_of_birth = COALESCE(?,date_of_birth),
                  address1 = COALESCE(?,address1),
                  address2 = COALESCE(?,address2),
                  address3 = COALESCE(?,address3),
                  city = COALESCE(?,city),
                  postcode = COALESCE(?,postcode),
                  email = COALESCE(?,email),
                  phone_number = COALESCE(?,phone_number),
                  national_insurance_number = COALESCE(?,national_insurance_number)
                WHERE customer_id = ?`;
    const params = [
      data.first_name,
      data.last_name,
      data.date_of_birth,
      data.address1,
      data.address2,
      data.address3,
      data.city,
      data.postcode,
      data.email,
      data.phone_number,
      data.national_insurance_number,
      req.params.id
    ];

    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: 'success',
        data: data,
        changes: this.changes
      });
    });
  });

  // DELETE customer
  router.delete('/:id', (req, res) => {
    db.run(
      'DELETE FROM customers WHERE customer_id = ?',
      req.params.id,
      function (err, result) {
        if (err) {
          res.status(400).json({ error: res.message });
          return;
        }
        res.json({ message: 'deleted', changes: this.changes });
      }
    );
  });
};

module.exports = customersRouter;