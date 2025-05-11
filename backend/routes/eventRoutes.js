const express = require('express');
const router = express.Router();
const db = require('../db');

// 1. Get All Events
router.get('/', (req, res) => {
    db.query('SELECT * FROM Event', (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});

// 2. Add New Event
router.post('/', (req, res) => {
    const { Event_ID, Name, Date, Location, NGO_ID } = req.body;
    const query = 'INSERT INTO Event (Event_ID, Name, Date, Location, NGO_ID) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Event_ID, Name, Date, Location, NGO_ID], (err, results) => {
        if (err) {
            console.error('Error inserting event:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(201).json({ message: 'Event added successfully' });
    });
});

// 3. Update Event
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Name, Date, Location, NGO_ID } = req.body;
    const query = 'UPDATE Event SET Name = ?, Date = ?, Location = ?, NGO_ID = ? WHERE Event_ID = ?';
    db.query(query, [Name, Date, Location, NGO_ID, id], (err, results) => {
        if (err) {
            console.error('Error updating event:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json({ message: 'Event updated successfully' });
    });
});

// 4. Delete Event
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Event WHERE Event_ID = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting event:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json({ message: 'Event deleted successfully' });
    });
});

module.exports = router;
