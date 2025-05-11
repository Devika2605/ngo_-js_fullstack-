const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all NGOs
router.get('/', (req, res) => {
    db.query('SELECT * FROM NGO', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// POST - Create NGO
router.post('/', (req, res) => {
    const { NGO_ID, Name, Address, Phone, Email } = req.body;
    const sql = 'INSERT INTO NGO VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [NGO_ID, Name, Address, Phone, Email], (err) => {
        if (err) return res.status(500).send(err);
        res.send('NGO Added!');
    });
});

// PUT - Update NGO
router.put('/:id', (req, res) => {
    const { Name, Address, Phone, Email } = req.body;
    const sql = 'UPDATE NGO SET Name=?, Address=?, Phone=?, Email=? WHERE NGO_ID=?';
    db.query(sql, [Name, Address, Phone, Email, req.params.id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('NGO Updated!');
    });
});

// DELETE - Remove NGO
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM NGO WHERE NGO_ID=?', [req.params.id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('NGO Deleted!');
    });
});

module.exports = router;
