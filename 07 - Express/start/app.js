const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

const productRoutes = require('./routes/product');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});