const express = require('express');
const path = require('path');
const app = express();

// const logger = require('./middleware/logger'); 

// Init middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.get('/', (req, res) => {
    // Basic response
    // res.send('<h1>Hello World!</h1>');

    // Using path/sendFile example
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

    // Set a static folder
    app.use(express.static(path.join(__dirname, 'public')));

});

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));