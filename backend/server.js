// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ngoRoutes = require('./routes/ngo'); // We'll create this next
// server.js
const donationRoutes = require('./routes/donationRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const teamRoutes = require('./routes/teamRoutes');
const volunteerEventRoutes = require('./routes/volunteerEventRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/ngos', ngoRoutes); // Route prefix
app.use('/api/donations', donationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/volunteer-events', volunteerEventRoutes);
app.use('/api/bankaccounts', bankAccountRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
