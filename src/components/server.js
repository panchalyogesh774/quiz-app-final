const express = require('express');
const { Pool } = require('pg');


const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'my_project',
  password: '123456',
  port: 5432, // PostgreSQL default port
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle registration form submission
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const client = await pool.connect();
    console.log("hhh", client);
    const result = await client.query('INSERT INTO quiz (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
    client.release();
    console.log('User registered successfully:', result.rows[0]);
    res.status(200).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
