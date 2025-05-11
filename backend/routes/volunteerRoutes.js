// backend/routes/volunteerRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all volunteers
router.get('/', (req, res) => {
    db.query('SELECT * FROM Volunteer', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Add a new volunteer
router.post('/', (req, res) => {
    const { Volunteer_ID, Name, Age, Phone, Email } = req.body;
    const sql = 'INSERT INTO Volunteer (Volunteer_ID, Name, Age, Phone, Email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [Volunteer_ID, Name, Age, Phone, Email], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Volunteer added successfully' });
    });
});

// Delete a volunteer
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM Volunteer WHERE Volunteer_ID = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Volunteer deleted successfully' });
    });
});

module.exports = router;
