// app.js

const express = require('express');
const bodyParser = require('body-parser');
const audioRoutes = require('./routes/audioRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', audioRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
