const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up method override middleware
app.use(methodOverride('_method'));

// Import routes
const products = require('./Routes/products');
app.use('/products', products);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
