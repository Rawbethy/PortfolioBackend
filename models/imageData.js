const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageID: {
        type: String,
        required: true,
        unique: true
    }
}, {collection: 'Images'})

const ImageID = mongoose.model('ImageID', imageSchema);
module.exports = ImageID;