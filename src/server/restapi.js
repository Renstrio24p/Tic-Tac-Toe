import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { exec } from 'child_process';
import rl from './inputModule.js';

const app = express();

// Get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

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
