const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const postsRoute = require('./routes/posts');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

// middlewares
app.use('/posts', postsRoute);

// routes
app.get('/', (req, res) => {
	res.send('we are live!!!')
})

// connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log('connected to database!!')	
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log('Server up and running'));