const express = require('express');
const app = express();
require('dotenv').config();
const errorHandlerMiddleware = require('./middleware/error-handler.js');
const notFound = require('./middleware/not-found.js');
const images = require('./routes/images.js')

//Middleware
app.use(express.json());

//Routes
app.use('/api/v1/getimages', images)
app.use(errorHandlerMiddleware);
app.use(notFound);


const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server listening at PORT ${PORT}`)
});