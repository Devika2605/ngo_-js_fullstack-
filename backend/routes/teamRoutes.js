// teamRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all teams
router.get('/', (req, res) => {
    db.query('SELECT * FROM Team', (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query error' });
        res.json(results);
    });
});

// Add new team
router.post('/', (req, res) => {
    const { Team_Name, Volunteer_ID } = req.body;
    db.query(
        'INSERT INTO Team (Team_ID, Team_Name, Volunteer_ID) VALUES (UUID(), ?, ?)',
        [Team_Name, Volunteer_ID],
        (err) => {
            if (err) return res.status(500).json({ error: 'Error inserting team' });
            res.status(201).json({ message: 'Team added successfully' });
        }
    );
});

// Update team
router.put('/:id', (req, res) => {
    const { Team_Name, Volunteer_ID } = req.body;
    db.query(
        'UPDATE Team SET Team_Name = ?, Volunteer_ID = ? WHERE Team_ID = ?',
        [Team_Name, Volunteer_ID, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: 'Error updating team' });
            res.json({ message: 'Team updated successfully' });
        }
    );
});

// Delete team
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM Team WHERE Team_ID = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: 'Error deleting team' });
        res.json({ message: 'Team deleted successfully' });
    });
});

module.exports = router;
