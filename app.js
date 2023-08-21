require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 5000;
const pw = process.env.DB_PASSWORD;

const imagesRouter = require('./routes/imageRouter');

app.use(express.json())
app.use(cors())
app.use('/images', imagesRouter);

const uri = 'mongodb+srv://admin:'+pw+'@cluster0.l7jtovk.mongodb.net/'
mongoose.connect(uri, {
    useNewUrlParser: true,
    dbName: 'Images'
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection extablished successfully')
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '...')
})