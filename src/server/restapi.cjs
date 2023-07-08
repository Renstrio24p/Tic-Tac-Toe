const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const rl = require('./inputModule.cjs');

const app = express();

// Get the directory name

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

// Serve the index.webpack.js file
app.get('/index.webpack.js', (req, res) => {
  const filePath = path.join(__dirname, '../../dist', 'index.webpack.js');
  res.set('Content-Type', 'application/javascript');
  res.sendFile(filePath);
});

// Button click handler
app.get('/button-click', (req, res) => {
  const buttonValue = req.query.value;
  console.log(`Button value: ${buttonValue}`);
  res.sendStatus(200);
});

// Start the server
const port = 5601;
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
  // Open the browser
  const command = process.platform === 'win32' ? 'start' : 'open';
  exec(`${command} http://localhost:${port}`);
});

// Handle server shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server has been terminated.');
    process.exit(0);
  });
});

// Watch user input
rl.on('line', (input) => {
  // Handle user input
  console.log(`Received user input: ${input}`);
  // Process the input according to your Tic Tac Toe game logic
});
