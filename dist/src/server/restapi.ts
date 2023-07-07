const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Define your API routes here

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
