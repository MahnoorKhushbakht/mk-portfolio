if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const UserModel = require('./src/models/user')
app.use(express.json())
app.use(cors())
const dbUrl = process.env.REACT_APP_DB_URL
mongoose.connect(dbUrl);

app.post('/contactme', (req, res) => {
    console.log('Received POST request to /contactme');
    console.log('Request body:', req.body);
  
    UserModel.create(req.body)
      .then((users) => {
        console.log('User created:', users);
        res.json(users);
      })
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).json(err);
      });
  });

const port = process.env.REACT_APP_PORT || 3001;
  
app.listen(port, () => {
    console.log('Server listening');
  });

