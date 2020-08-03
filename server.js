const express = require('express');
const connectDB = require('./config/database-connection');
const User = require('./models/User');

const app = express();

connectDB();

//Init Middleware - allows us to get data in req.body from User.js model
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
