const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all donations
router.get('/', (req, res) => {
    db.query('SELECT * FROM Donation', (err, results) => {
        if (err) return res.status(500).json({ error: 'Fetch failed' });
        res.json(results);
    });
});

// Add a new donation
router.post('/', (req, res) => {
    const { Donation_ID, Amount, Date, Donor_Name, NGO_ID } = req.body;
    db.query(
        'INSERT INTO Donation (Donation_ID, Amount, Date, Donor_Name, NGO_ID) VALUES (?, ?, ?, ?, ?)',
        [Donation_ID, Amount, Date, Donor_Name, NGO_ID],
        (err) => {
            if (err) return res.status(500).json({ error: 'Insert failed' });
            res.status(201).json({ message: 'Donation added' });
        }
    );
});

// Update a donation
router.put('/:id', (req, res) => {
    const { Donation_ID, Amount, Date, Donor_Name, NGO_ID } = req.body;
    db.query(
        'UPDATE Donation SET Donation_ID = ?, Amount = ?, Date = ?, Donor_Name = ?, NGO_ID = ? WHERE Donation_ID = ?',
        [Donation_ID, Amount, Date, Donor_Name, NGO_ID, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: 'Update failed' });
            res.json({ message: 'Donation updated' });
        }
    );
});

// Delete a donation
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM Donation WHERE Donation_ID = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: 'Delete failed' });
        res.json({ message: 'Donation deleted' });
    });
});

module.exports = router;
