const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.static('public'));

// Import routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/users', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
