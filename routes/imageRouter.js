const router = require('express').Router();

let Images = require('../models/imageData');

router.route('/').get(async(req, res) => {
    const images = await Images.find({});
    if(images) {
        res.json(images)
    }
    else {
        res.json({message: 'No Images Found'})
    }
})

module.exports = router;