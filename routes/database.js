require('dotenv').config();
const mysql = require('mysql2/promise'); // Use mysql2/promise for promises

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

module.exports = db;