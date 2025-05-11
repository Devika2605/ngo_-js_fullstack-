const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all volunteer-event links
router.get('/', (req, res) => {
    db.query('SELECT * FROM Volunteer_Event', (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Add a new link
router.post('/', (req, res) => {
    const { Volunteer_ID, Event_ID } = req.body;
    db.query(
        'INSERT INTO Volunteer_Event (Volunteer_ID, Event_ID) VALUES (?, ?)',
        [Volunteer_ID, Event_ID],
        (err) => {
            if (err) return res.status(500).json({ error: 'Insert failed' });
            res.status(201).json({ message: 'Link created' });
        }
    );
});

// Update an existing link (change event or volunteer)
router.put('/:volId/:eventId', (req, res) => {
    const { Volunteer_ID, Event_ID } = req.body;
    const { volId, eventId } = req.params;
    db.query(
        'UPDATE Volunteer_Event SET Volunteer_ID = ?, Event_ID = ? WHERE Volunteer_ID = ? AND Event_ID = ?',
        [Volunteer_ID, Event_ID, volId, eventId],
        (err) => {
            if (err) return res.status(500).json({ error: 'Update failed' });
            res.json({ message: 'Link updated' });
        }
    );
});

// Delete a link
router.delete('/:volId/:eventId', (req, res) => {
    db.query(
        'DELETE FROM Volunteer_Event WHERE Volunteer_ID = ? AND Event_ID = ?',
        [req.params.volId, req.params.eventId],
        (err) => {
            if (err) return res.status(500).json({ error: 'Delete failed' });
            res.json({ message: 'Link deleted' });
        }
    );
});

module.exports = router;
