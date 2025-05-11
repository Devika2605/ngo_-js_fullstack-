const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all bank accounts
router.get('/', (req, res) => {
    db.query('SELECT * FROM BankAccount', (err, results) => {
        if (err) return res.status(500).json({ error: 'Fetch failed' });
        res.json(results);
    });
});

// Add a new bank account
router.post('/', (req, res) => {
    const { Account_No, Bank_Name, NGO_ID } = req.body;
    db.query(
        'INSERT INTO BankAccount (Account_No, Bank_Name, NGO_ID) VALUES (?, ?, ?)',
        [Account_No, Bank_Name, NGO_ID],
        (err) => {
            if (err) return res.status(500).json({ error: 'Insert failed' });
            res.status(201).json({ message: 'Bank account created' });
        }
    );
});

// Update a bank account
router.put('/:id', (req, res) => {
    const { Account_No, Bank_Name, NGO_ID } = req.body;
    db.query(
        'UPDATE BankAccount SET Account_No = ?, Bank_Name = ?, NGO_ID = ? WHERE Account_No = ?',
        [Account_No, Bank_Name, NGO_ID, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: 'Update failed' });
            res.json({ message: 'Bank account updated' });
        }
    );
});

// Delete a bank account
router.delete('/:id', (req, res) => {
    db.query(
        'DELETE FROM BankAccount WHERE Account_No = ?',
        [req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: 'Delete failed' });
            res.json({ message: 'Bank account deleted' });
        }
    );
});

module.exports = router;
