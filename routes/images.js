const express = require('express')
const router = express.Router();

const { getImages } = require('../controller/images.js')

router.route('/').post(getImages);


module.exports = router;