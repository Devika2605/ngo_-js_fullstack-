// backend/db.js
const mysql = require('mysql');

// Create a single connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your username
    password: '', // your password
    database: 'ngo_project',
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to DB:', err.stack);
        return;
    }
    console.log('Connected to MySQL DB');
});

// Export the single connection for use in routes
module.exports = db;
