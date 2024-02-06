// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 5000; // or any port you prefer

// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my_project',
  password: '123456',
  port: 5432,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Insert user data into the database
    const query = 'INSERT INTO quiz (username, email, password) VALUES ($1, $2, $3)';
    const values = [username, email, password];
    await pool.query(query, values);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
